import { cast } from './cast';
export interface movieDetail {
    id: number;
    title: string;
    posterUrl: string;
    backdropUrl: string;
    rating?: any;
    overview: string;
    tagline: string;
    budget: number;
    revenue: number;
    imdbUrl: string;
    tmdbUrl: string;
    releaseDate: string;
    runTime: number;
    price: number;
    favoritesCount: number;
    casts?: cast[];
    genres?: any;
  }