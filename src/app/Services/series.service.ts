import { Injectable } from '@angular/core';
import { Observable, timer, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ChangeLanguageService } from './change-language.service';
import { SerieDetail } from '@models/serieDetail.model';
import { SearchData } from '@models/searchData.model';
import { Credits } from '@models/credits.model';
import { SeasonEpiosodes } from '@models/seasonEpiosed.model';
import 'rxjs/add/observable/of';
import { RequestLimiter } from './requestLimiter';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  language: string;
  readonly limiter = new RequestLimiter(10600, 39);

  constructor(private http: HttpClient, private changeLanguageService: ChangeLanguageService, private router: Router) {
    this.language = this.changeLanguageService.getInfoLanguage();
  }

  getSeriesDetail(seriesId: number): Observable<SerieDetail> {
    return this.limiter.limit(this.http.get<SerieDetail>(
      `${environment.apiUrl}tv/${seriesId}?api_key=${environment.apiKey}&language=${this.language}-US`), this.router.url);
  }

  searchSeries(seriesTitle: string, page: number): Observable<SearchData> {
    return this.limiter.limit(this.http.get<SearchData>(`${environment.apiUrl}search/tv?` +
      `api_key=${environment.apiKey}&language=${this.language}-US&query=${seriesTitle}&page=${page}`), this.router.url);
  }

  getCredits(seriesId: number): Observable<Credits> {
    return this.limiter.limit(this.http.get<Credits>(
      `${environment.apiUrl}tv/${seriesId}/credits?api_key=${environment.apiKey}&language=${this.language}-US`
    ), this.router.url);
  }

  getSeasonEpisode(seriesId: number, seasonNumber: number): Observable<SeasonEpiosodes> {
    return this.limiter.limit(
      this.http.get<SeasonEpiosodes>(
        `${environment.apiUrl}tv/${seriesId}/season/${seasonNumber}?api_key=${environment.apiKey}&language=${this.language}-US`
      ), this.router.url);
  }

  getSimilarSeries(seriesId: number, page: number = 1): Observable<SearchData> {
    return this.limiter.limit(
      this.http.get<SearchData>(
        `${environment.apiUrl}tv/${seriesId}/similar?api_key=${environment.apiKey}` +
        `&language=${this.language}-US&page=${page}`
      ), this.router.url);
  }

  getLastWeekTrends(): Observable<SearchData> {
    return this.limiter.limit(this.http.get<SearchData>(`${environment.apiUrl}trending/tv/week?api_key=${environment.apiKey}`
    ), this.router.url)
  }

  getLastTrends(page: number): Observable<SearchData> {
    return this.limiter.limit(this.http.get<SearchData>(`${environment.apiUrl}tv/popular` +
      `?api_key=${environment.apiKey}&language=${this.language}-US&page=${page}`
    ), this.router.url);
  }

  getPremieres(date: string, page: number): Observable<SearchData> {
    return this.limiter.limit(this.http.get<SearchData>(
      `${environment.apiUrl}discover/tv?api_key=${environment.apiKey}&language=${this.language}-` +
      `US&sort_by=vote_average.asc&first_air_date.gte=${date}&first_air_date.lte=${date}&page=${page}` +
      `&timezone=America%2FNew_York&include_null_first_air_dates=false`
    ), this.router.url);
  }

  getTopratedSeries(page: number): Observable<SearchData> {
    return this.limiter.limit(this.http.get<SearchData>(
      `${environment.apiUrl}tv/top_rated?api_key=${environment.apiKey}` +
      `&language=${this.language}-US&page=${page}`
    ), this.router.url);
  }

}
