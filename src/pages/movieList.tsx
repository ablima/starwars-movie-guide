import useGetSagaList from "../hooks/useGetSagaList";

const MovieList = () => {
  const { data, loading, error } = useGetSagaList();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>Movie List Page</div>
  );
}

export default MovieList;