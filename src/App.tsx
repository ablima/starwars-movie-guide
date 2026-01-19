import MovieList from './pages/MovieList';
import Alert from '@mui/material/Alert';

function App() {
  if (!import.meta.env.VITE_MOVIE_LIST_API_URL)
    return <Alert severity="error">VITE_MOVIE_LIST_API_URL is not set in environment variables</Alert>;

  if (!import.meta.env.VITE_MOVIE_DETAILS_API_URL)
    return <Alert severity="error">VITE_MOVIE_DETAILS_API_URL is not set in environment variables</Alert>;

  return (
    <>
      <MovieList />
    </>
  )
}

export default App
