import { Season } from './season.model';
import { Genre } from './genre.model';
import { NextEpisode } from './nextEpisode.model';
import { Producers } from './producers.model';

export class SerieDetail {
    backdrop_path: string;
    created_by: Array<CreatedBy>
    episode_run_time: Array<number>
    first_air_date: string
    genres: Array<Genre>
    homepage: string
    id: number
    in_production: boolean
    languages: Array<string>
    last_air_date: string
    last_episode_to_air: LastEpisodeToAir
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

  export class CreatedBy {
    credit_id: string
    gender: number
    id: number
    name: string
    profile_path: string
  }

  export class LastEpisodeToAir {
    air_date: string
    episode_number: number
    id: number
    name: string
    overview: string
    production_code: string
    season_number: number
    show_id: number
    still_path: null | string
    vote_average: number
    vote_count: number
}