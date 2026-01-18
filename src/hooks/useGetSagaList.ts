// import axios from 'axios';
import { useEffect, useState } from 'react';
import type { MovieDetails } from '../types';
import mockedSagaList from './mockedSagaList.json';

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

        setData(mockedSagaList.results);
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
