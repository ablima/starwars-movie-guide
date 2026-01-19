import type { MovieDetails } from '../../../types';
import './details.css';
import MovieRating from '../../../components/rating';
import { Chip, Fade, Grid, Stack } from '@mui/material';
import { convertNumberToRoman } from '../../../utils';
import { useEffect, useState } from 'react';

interface DetailsProps {
  movie: MovieDetails | null;
}

const Details = ({ movie }: DetailsProps) => {
  const [currentMovie, setCurretMovie] = useState<MovieDetails | null>(null);
  const [changed, setChanged] = useState<boolean>(false);

  useEffect(() => {
    setChanged(false);
    setTimeout(() => {
      setCurretMovie(movie);
      setChanged(true);
    }, 200);
  }, [movie]);

  if (movie === null) {
    return (
      <div className="contentContainer noMovieSelected">
        <h3>Please select a movie to see details.</h3>
      </div>
    );
  }

  return (
    <Fade in={changed}>
      <Grid container className="contentContainer detailsContainer">
        <Grid size={12}>
          <h3>Episode {convertNumberToRoman(currentMovie?.episode_id ?? 0)} - {currentMovie?.title}</h3>
        </Grid>
        <Grid size={'auto'}>
          <img src={currentMovie?.extraDetails?.Poster} alt={currentMovie?.title} className="poster" />
        </Grid>
        <Grid size={'grow'}>
          <Stack direction="column" spacing={2} paddingRight={4}>
            <div>{currentMovie?.opening_crawl}</div>
            <div>Directed by: {currentMovie?.director}</div>
          </Stack>
        </Grid>
        <Grid size={12}>
          <Stack spacing={2} marginTop={2}>
            <Stack direction="row" spacing={1}>
              <div>Average rating:</div>
              <MovieRating
                rating={currentMovie?.extraDetails?.AverageRating ?? 0}
                size="medium"
              />
            </Stack>
            <Stack direction="row" spacing={2}>
              {currentMovie?.extraDetails?.Ratings.map((rating, index) => (
                <Chip
                  key={index}
                  label={`${rating.Source}: ${rating.Value}`}
                  color="primary"
                  variant="outlined"
                />
              ))}
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Fade>
  );
}

export default Details;
