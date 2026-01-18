import type { MovieDetails } from "../../types";

interface ListProps {
  movies: MovieDetails[];
  setSelectedMovie: (episode_id: number) => void;
}

const List = ({
  movies,
  setSelectedMovie
}: ListProps) => {
  return (
    <div>
      Movie List
    </div>
  );
}

export default List;
