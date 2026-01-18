import { Col, Container, Row } from "react-bootstrap";
import type { MovieDetails } from "../../../types";
import MovieRating from "../../../components/rating";
import './list.css';

interface ListProps {
  movies: MovieDetails[];
  selectedEpisodeId?: number;
  setSelectedMovie: (movie: MovieDetails) => void;
}

const List = ({
  movies,
  selectedEpisodeId,
  setSelectedMovie
}: ListProps) => {

  const handleRowClick = (movie: MovieDetails) => {
    setSelectedMovie(movie);
  };

  return (
    <Container className="contentContainer">
      {movies.map((movie) => (
        <Row
          key={movie.episode_id}
          onClick={() => handleRowClick(movie)}
          className={"listRow " + (movie.episode_id === selectedEpisodeId && "selected")}
        >
          <Col md={2}>EPISODE {movie.episode_id}</Col>
          <Col md={4}>{movie.title}</Col>
          <Col md={4}>
            <MovieRating rating={movie.extraDetails?.AverageRating ?? 0} />
          </Col>
          <Col md={2}>{movie.release_date}</Col>
        </Row>
      ))}
    </Container>
  );
}

export default List;
