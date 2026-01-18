import axios from 'axios';
import { useEffect, useState } from 'react';
import type { MovieDetails } from '../types';
import mockedSagaList from './mockedSagaList.json';

const episodeIMDBMap: { [key: number]: string } = {
  1: 'tt0120915',
  2: 'tt0121765',
  3: 'tt0121766',
  4: 'tt0076759',
  5: 'tt0080684',
  6: 'tt0086190',
};

const useGetSagaList = () => {
  const [data, setData] = useState<MovieDetails[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        // TODO use real API when available
        // const response = await axios.get(import.meta.env.VITE_MOVIE_LIST_API_URL);
        // setData(response.data.results);

        const movies = mockedSagaList.results;

        movies.map(async (movie: MovieDetails) => {
          const details = await axios.get(
            import.meta.env.VITE_MOVIE_DETAILS_API_URL, {
            params: {
              i: episodeIMDBMap[movie.episode_id],
            },
          });
    
          const ratings = details.data.Ratings.map(
            (rating: { Source: string; Value: string }) => {
              if (rating.Source.includes('Rotten Tomatoes')) {
                return parseFloat(rating.Value.replace('%', '')) / 10;
              } else if (rating.Source.includes('Metacritic')) {
                return parseFloat(rating.Value.split('/')[0]) / 10;
              } else if (rating.Source.includes('Internet Movie Database')) {
                return parseFloat(rating.Value.split('/')[0]);
              }
            }
          );

          movie.extraDetails = {
            Poster: details.data.Poster,
            AverageRating: ratings.reduce((sum: number, current: number) => sum + current, 0) / ratings.length,
            Ratings: details.data.Ratings,
          };
        });

        setData(movies);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
        setError(null);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
}

export default useGetSagaList;
