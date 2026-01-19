import useGetSagaList from "../../hooks/useGetSagaList";
import ListFilters from "./Filters/filters";
import List from "./List/list";
import Details from "./Details/details";
import { useEffect, useState } from "react";
import type { MovieDetails, sortOptions } from "../../types";
import filterData from "./Filters/filterData";
import { CircularProgress, Fade, Grid } from "@mui/material";
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

  if (loading) return (
    <div className="loadingContainer">
      <CircularProgress />
    </div>
  );
  if (error) return <div>Error: {error}</div>;

  return (
    <Fade in={!loading} style={{ transitionDelay: '200ms' }}>
      <Grid container>
        <Grid size={12} className="filtersContainer">
          <ListFilters
            sort={sort}
            setSort={setSort}
            filter={filter}
            setFilter={setFilter}
          />
        </Grid>
        <Grid size={{xs: 12, md: 12, lg: 6}} className="moviesContainer">
          <List
            movies={listData ?? []}
            selectedEpisodeId={selectedMovie?.episode_id}
            setSelectedMovie={setSelectedMovie}
          />
        </Grid>
        <Grid size={{xs: 12, md: 12, lg: 6}}>
          <Details movie={selectedMovie} />
        </Grid>
      </Grid>
    </Fade>
  );
}

export default MovieList;