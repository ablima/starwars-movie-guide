import { Col, Container, Row, Spinner } from "react-bootstrap";
import useGetSagaList from "../../hooks/useGetSagaList";
import ListFilters from "./Filters/filters";
import List from "./List/list";
import Details from "./Details/details";
import { useEffect, useState } from "react";
import type { MovieDetails } from "../../types";
import './index.css';

const MovieList = () => {
  const { data, loading, error } = useGetSagaList();
  const [listData, setListData] = useState<MovieDetails[] | null>(null);
  const [selectedMovie, setSelectedMovie] = useState<MovieDetails | null>(null);
  const [sort, setSort] = useState<'episode' | 'year'>('episode');
  const [filter, setFilter] = useState<string>('');

  useEffect(() => {
    if (data && data.length > 0) {
      let filteredData = [...data];
      if (sort === 'episode') {
        filteredData.sort((a, b) => a.episode_id - b.episode_id);
      } else if (sort === 'year') {
        filteredData.sort((a, b) => {
          const yearA = parseInt(a.release_date.split('-')[0]);
          const yearB = parseInt(b.release_date.split('-')[0]);
          return yearA - yearB;
        });
      }

      if (filter.trim() !== '') {
        filteredData = filteredData.filter(movie =>
          movie.title.toLowerCase().includes(filter.toLowerCase())
        );
      }

      setListData(filteredData);
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