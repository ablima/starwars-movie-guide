import { Col, Container, Image, Row } from 'react-bootstrap';
import type { MovieDetails } from '../../../types';
import './details.css';
import MovieRating from '../../../components/rating';

interface DetailsProps {
  movie: MovieDetails | null;
}

const numberToRoman: { [key: number]: string } = {
  1: 'I',
  2: 'II',
  3: 'III',
  4: 'IV',
  5: 'V',
  6: 'VI',
}

const Details = ({ movie }: DetailsProps) => {

  if (movie === null) {
    return (
      <Container className="contentContainer noMovieSelected">
        <h3>Please select a movie to see details.</h3>
      </Container>
    );
  }

  return (
    <Container className="contentContainer detailsContainer">
      <Row>
        <Col>
          <h3>Episode {numberToRoman[movie.episode_id]} - {movie.title}</h3>
        </Col>
      </Row>
      <Row>
        <Col md={3}>
          <Image src={movie.extraDetails?.Poster} alt={movie.title} fluid />
        </Col>
        <Col md={9}>{movie.opening_crawl}</Col>
      </Row>
      <Row className="rowWithPadding">
        <Col>Directed by: {movie.director}</Col>
      </Row>
      <Row className="rowWithPadding">
        <Col className="flexDiv">
          Average rating:
          &nbsp;
          <MovieRating rating={movie.extraDetails?.AverageRating ?? 0} />
        </Col>
      </Row>
      <Row>
        <Col md={12} className="flexDiv">
          {movie.extraDetails?.Ratings.map((rating, index) => (
            <div key={index} className="ratingBadge">
              {rating.Source}: {rating.Value}
            </div>
          ))}
        </Col>
      </Row>
    </Container>
  );
}

export default Details;
