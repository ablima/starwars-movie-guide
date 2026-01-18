import { Col, Container, Row, Spinner } from "react-bootstrap";
import useGetSagaList from "../../hooks/useGetSagaList";
import ListFilters from "./Filters/filters";
import List from "./List/list";
import Details from "./Details/details";
import { useState } from "react";
import type { MovieDetails } from "../../types";
import './index.css';

const MovieList = () => {
  const { data, loading, error } = useGetSagaList();
  const [selectedMovie, setSelectedMovie] = useState<MovieDetails | null>(null);

  if (loading) return <Spinner animation="border" />;
  if (error) return <div>Error: {error}</div>;

  return (
    <Container fluid>
      <Row className="filterContainer">
        <Col>
          <ListFilters />
        </Col>
      </Row>
      <Row>
        <Col className="moviesContainer">
          <List
            movies={data ?? []}
            selectedEpisodeId={selectedMovie?.episode_id}
            setSelectedMovie={setSelectedMovie}
          />
        </Col>
        <Col>
          <Details movie={selectedMovie} />
        </Col>
      </Row>
    </Container>
  );
}

export default MovieList;