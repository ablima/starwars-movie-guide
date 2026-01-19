import type { MovieDetails } from "../../../types";
import MovieRating from "../../../components/rating";
import './list.css';
import { Grid } from "@mui/material";
import { convertNumberToRoman } from "../../../utils";

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
    <div className="contentContainer">
      {movies.map((movie) => (
        <Grid
          key={movie.episode_id}
          container
          size={12}
          onClick={() => handleRowClick(movie)}
          className={"listRow " + (movie.episode_id === selectedEpisodeId && "selected")}
        >
          <Grid size={2}>
            <b>EPISODE {convertNumberToRoman(movie.episode_id)}</b>
          </Grid>
          <Grid size={4}>{movie.title}</Grid>
          <Grid size={4}>
            <MovieRating
              rating={movie.extraDetails?.AverageRating ?? 0}
              size="small"
            />
          </Grid>
          <Grid size={2}>{movie.release_date}</Grid>
        </Grid>
      ))}
    </div>
  );
}

export default List;
