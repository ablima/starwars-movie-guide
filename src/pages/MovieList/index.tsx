import { Col, Container, Row, Spinner } from "react-bootstrap";
import useGetSagaList from "../../hooks/useGetSagaList";
import ListFilters from "./filters";
import List from "./list";
import Details from "./details";
import { useState } from "react";

const MovieList = () => {
  const { data, loading, error } = useGetSagaList();
  const [selectedMovie, setSelectedMovie] = useState<number | null>(null);

  if (loading) return <Spinner animation="border" />;
  if (error) return <div>Error: {error}</div>;

  return (
    <Container fluid>
      <Row>
        <Col>
          <ListFilters />
        </Col>
      </Row>
      <Row>
        <Col>
          <List
            movies={data ?? []}
            setSelectedMovie={setSelectedMovie}
          />
        </Col>
        <Col>
          <Details episode_id={selectedMovie} />
        </Col>
      </Row>
    </Container>
  );
}

export default MovieList;