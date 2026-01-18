interface DetailsProps {
  episode_id: number | null;
}

const Details = ({ episode_id }: DetailsProps) => {

  if (episode_id === null) {
    return <h2>Please select a movie to see details.</h2>;
  }

  return (
    <div>Movie Details</div>
  );
}

export default Details;
