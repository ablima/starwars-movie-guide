import { Rating } from "@smastrom/react-rating";

interface MovieRatingProps {
  rating: number;
}

const MovieRating = ({ rating }: MovieRatingProps) => {
  return (
    <Rating
      readOnly
      style={{ maxWidth: 250 }}
      items={10}
      orientation="horizontal"
      value={rating}
    />
  );
};

export default MovieRating;