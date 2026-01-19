import { Col, Container, Row, Spinner } from "react-bootstrap";
import useGetSagaList from "../../hooks/useGetSagaList";
import ListFilters from "./Filters/filters";
import List from "./List/list";
import Details from "./Details/details";
import { useEffect, useState } from "react";
import type { MovieDetails, sortOptions } from "../../types";
import filterData from "./Filters/filterData";
import './index.css';

const MovieList = () => {
  const { data, loading, error } = useGetSagaList();
  const [listData, setListData] = useState<MovieDetails[] | null>(null);
  const [selectedMovie, setSelectedMovie] = useState<MovieDetails | null>(null);
  const [sort, setSort] = useState<sortOptions>('episode');
  const [filter, setFilter] = useState<string>('');

  useEffect(() => {
    if (data && data.length > 0) {
      setListData(
        filterData(data, sort, filter)
      );
    }
  }, [sort, filter, data]);

  if (loading) return <Spinner animation="border" />;
  if (error) return <div>Error: {error}</div>;

  return (
    <Container fluid>
      <Row className="filterContainer">
        <Col>
          <ListFilters
            setSort={setSort}
            filter={filter}
            setFilter={setFilter}
          />
        </Col>
      </Row>
      <Row>
        <Col className="moviesContainer">
          <List
            movies={listData ?? []}
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