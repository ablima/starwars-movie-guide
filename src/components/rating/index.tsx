import { Rating } from "@mui/material";

interface MovieRatingProps {
  rating: number;
  size: "small" | "medium";
}

const MovieRating = ({ rating, size }: MovieRatingProps) => {
  return (
    <Rating
      readOnly
      size={size}
      max={10}
      precision={0.1}
      value={rating}
    />
  );
};

export default MovieRating;