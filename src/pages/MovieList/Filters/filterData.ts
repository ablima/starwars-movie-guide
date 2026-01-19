import type { MovieDetails, sortOptions } from "../../../types";

const filterData = (
  data: MovieDetails[],
  sort: sortOptions,
  filterValue: string
): MovieDetails[] => {
  let filteredData = [...data];

  if (sort === 'episode') {
    filteredData.sort((a, b) => a.episode_id - b.episode_id);
  } else if (sort === 'year') {
    filteredData.sort((a, b) => {
      const yearA = parseInt(a.release_date.split('-')[0]);
      const yearB = parseInt(b.release_date.split('-')[0]);
      return yearA - yearB;
    });
  } else if (sort === 'rating') {
    filteredData.sort((a, b) => {
      const ratingA = a.extraDetails?.AverageRating ?? 0;
      const ratingB = b.extraDetails?.AverageRating ?? 0;
      return ratingB - ratingA;
    });
  }

  if (filterValue.trim() !== '') {
    filteredData = filteredData.filter(movie =>
      movie.title.toLowerCase().includes(filterValue.toLowerCase())
    );
  }

  return filteredData;
}

export default filterData;
