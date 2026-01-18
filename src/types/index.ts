export interface MovieExtraDetails {
  Poster: string;
  AverageRating: number;
  Ratings: { Source: string; Value: string }[];
}

export interface MovieDetails {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  release_date: string;
  extraDetails?: MovieExtraDetails;
}
