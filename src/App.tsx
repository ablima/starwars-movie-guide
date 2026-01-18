import MovieList from './pages/MovieList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  if (!import.meta.env.VITE_MOVIE_LIST_API_URL)
    return <div>VITE_MOVIE_LIST_API_URL is not set in environment variables</div>;

  if (!import.meta.env.VITE_MOVIE_DETAILS_API_URL)
    return <div>VITE_MOVIE_DETAILS_API_URL is not set in environment variables</div>;

  return (
    <>
      <MovieList />
    </>
  )
}

export default App
