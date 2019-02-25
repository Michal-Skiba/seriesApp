import { Season } from './season.model';
import { Genres } from './genres.model';
import { NextEpisode } from './nextEpisode.model';
import { Producers } from './producers.model';

export class SerieDetail {
    backdrop_path: string;
    created_by: Array<object>
    episode_run_time: Array<number>
    first_air_date: string
    genres: Array<Genres>
    homepage: string
    id: number
    in_production: boolean
    languages: Array<string>
    last_air_date: string
    last_episode_to_air: object
    name: string
    networks: Array<Producers>
    next_episode_to_air: null | NextEpisode
    number_of_episodes: string
    number_of_seasons: number
    origin_country: Array<string>
    original_language: string
    original_name: string
    overview: string
    popularity: string
    poster_path: string
    production_companies: Array<Producers>
    seasons: Array<Season>
    status: string
    type: string
    vote_average: number
    vote_count: number
    constructor(args: SerieDetail) {
        Object.assign(this, args);
      }
  }
