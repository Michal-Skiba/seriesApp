import { SearchData } from '../../app/shared/models/searchData.model';
import { Observable } from 'rxjs';
import {CreatedBy, LastEpisodeToAir, SerieDetail} from "@models/serieDetail.model";
import {Genre} from "@models/genre.model";
import {Producers} from "@models/producers.model";
import {NextEpisode} from "@models/nextEpisode.model";
import {Season} from "@models/season.model";


export const fakeSearchSeriesData = {
    page: 1,
    results: [
        {
            backdrop_path: 'nothing',
            first_air_date: '10.10.1990',
            genre_ids: [1, 2, 3],
            id: 100,
            name: 'test1',
            origin_country: ['JP'],
            original_language: 'JP',
            original_name: 'testowyJanusz1',
            overview: 'opis',
            popularity: 3,
            poster_path: 'noPath',
            vote_average: 100,
            vote_count: 10,
        },
        {
            backdrop_path: 'nothing',
            first_air_date: '10.10.1990',
            genre_ids: [1, 2, 3],
            id: 102,
            name: 'test2',
            origin_country: ['JP'],
            original_language: 'JP',
            original_name: 'testowyJanusz2',
            overview: 'opis',
            popularity: 7,
            poster_path: 'noPath',
            vote_average: 56,
            vote_count: 30,
        },
        {
            backdrop_path: 'nothing',
            first_air_date: '10.10.1990',
            genre_ids: [1, 2, 3],
            id: 103,
            name: 'test3',
            origin_country: ['JP'],
            original_language: 'JP',
            original_name: 'testowyJanusz3',
            overview: 'opis',
            popularity: 1,
            poster_path: 'noPath',
            vote_average: 50,
            vote_count: 104,
        },
        {
            backdrop_path: 'nothing',
            first_air_date: '10.10.1990',
            genre_ids: [1, 2, 3],
            id: 104,
            name: 'test4',
            origin_country: ['JP'],
            original_language: 'JP',
            original_name: 'testowyJanusz4',
            overview: 'opis',
            popularity: 65,
            poster_path: 'noPath',
            vote_average: 123,
            vote_count: 110,
        },
        {
            backdrop_path: 'nothing',
            first_air_date: '10.10.1990',
            genre_ids: [1, 2, 3],
            id: 105,
            name: 'test5',
            origin_country: ['JP'],
            original_language: 'JP',
            original_name: 'testowyJanusz5',
            overview: 'opis',
            popularity: 33,
            poster_path: 'noPath',
            vote_average: 111,
            vote_count: 15,
        }
    ],
    total_pages: 1,
    total_results: 5,
};

export const fakeSerieDetail = {
  backdrop_path: 'test',
  created_by: [{
    credit_id: 'test',
    gender: 1,
    id: 1,
    name: 'test',
    profile_path: 'test',
  }],
  episode_run_time: [1, 2, 3],
  first_air_date: 'test',
  genres: [{id: 1, name: 'janusz' }],
  homepage: 'janusz',
  id: 1234,
  in_production: false,
  languages: ['PL'],
  last_air_date: 'test',
  last_episode_to_air: {
    air_date: 'test',
    episode_number: 1,
    id: 2,
    name: 'test',
    overview: 'test',
    production_code: 'test',
    season_number: 1,
    show_id: 2,
    still_path: null,
    vote_average: 2,
    vote_count: 3,
  },
  name: 'test',
  networks: [{
    id: 1,
    logo_path: 'test',
    name: 'test',
    origin_country: 'test'
  }],
  next_episode_to_air: null,
  number_of_episodes: 'test',
  number_of_seasons: 1234,
  origin_country: ['test'],
  original_language: 'test',
  original_name: 'test',
  overview: 'test',
  popularity: 'test',
  poster_path: 'test',
  production_companies: [{
    id: 1,
    logo_path: 'test',
    name: 'test',
    origin_country: 'test'
  }],
  seasons: [{
    air_date: 'test',
    episode_count: 1,
    id: 1,
    name: 'test',
    overview: null,
    poster_path: 'test',
    season_number: 1,
  }],
  status: 'test',
  type: 'test',
  vote_average: 1,
  vote_count: 2,
};

export class FakeSeriesService {
    static searchSeries(): Observable<any> {
        throw new Error('Method not implemented.');
    }

    constructor() { }
    searchSeries(): Observable<SearchData> {
      return Observable.of(fakeSearchSeriesData);
    }

    getSeriesDetail(id): Observable<SerieDetail> {
      console.log(id, 'aaaaaaa');
      return Observable.of(fakeSerieDetail);
    }
}
