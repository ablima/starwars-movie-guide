export interface MovieExtraDetails {
  episode_id: number;
  Poster: string;
  Ratings: { Source: string; Value: string }[];
}

export interface MovieDetails {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  release_date: string;
}
