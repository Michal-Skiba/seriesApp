import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap, delay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ChangeLanguageService } from './change-language.service';
import { SerieDetail, SerieDetailResponse } from '@models/serieDetail.model';
import { SearchData, SearchDataRepsonse } from '@models/searchData.model';
import { Credits, CreditsResponse } from '@models/credits.model';
import { SeasonEpiosodes, SeasonEpiosodesReponse } from '@models/seasonEpiosed.model';

import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  
  language: string;
  delay: number = 0;
  firstRequestTime: any = null;
  currentRequestCounter: number = 0;
  arrayTimes: Array<object> = []

  constructor(private http: HttpClient, private changeLanguageService: ChangeLanguageService) { 
    this.language = this.changeLanguageService.getInfoLanguage();
  }

  limitsCalculate(resp): void {
    const limitRemaining = resp.headers.get('X-RateLimit-Remaining')
    this.arrayTimes.push(moment())
    const now = moment();
    if(limitRemaining === "39") {
      this.arrayTimes = []
      this.firstRequestTime = moment();
    }
    this.currentRequestCounter++
    if(limitRemaining <= 2 && now.diff(this.firstRequestTime, "seconds") < 10) {
      this.delay = (environment.requestLimitTime - now.diff(this.firstRequestTime, "seconds")) * 1000;
      this.currentRequestCounter = 0;
    } else {
      this.delay = 0;
    }
    if(this.currentRequestCounter >= 39) {
      this.firstRequestTime = this.arrayTimes[this.arrayTimes.length - (39 - limitRemaining)]
    }
  }

  getSeriesDetail(seriesId: number): Observable<SerieDetailResponse> {
    return this.http.get<SerieDetail>(`${environment.apiUrl}tv/${seriesId}?api_key=${environment.apiKey}&language=${this.language}-US`, {
      observe: 'response',
    }).pipe(
      tap(resp => { this.limitsCalculate(resp) }),
      delay(this.delay)
    )
  }

  searchSeries(seriesTitle: string, page: number): Observable<SearchDataRepsonse> {
    return this.http.get<SearchData>(`${environment.apiUrl}search/tv?api_key=${environment.apiKey}&language=${this.language}-US&query=${seriesTitle}&page=${page}`, {
      observe: 'response',
    }).pipe(
      tap(resp => this.limitsCalculate(resp)),
      delay(this.delay)
    )
  }

  getCredits(seriesId: number): Observable<CreditsResponse> { 
    return this.http.get<Credits>(`${environment.apiUrl}tv/${seriesId}/credits?api_key=${environment.apiKey}&language=${this.language}-US`, {
      observe: 'response',
    }).pipe(
      tap(resp => { this.limitsCalculate(resp) }),
      delay(this.delay)
    )
  }

  getSeasonEpisode(seriesId: number, seasonNumber: number): Observable<SeasonEpiosodesReponse> {
    return this.http.get<SeasonEpiosodes>(`${environment.apiUrl}tv/${seriesId}/season/${seasonNumber}?api_key=${environment.apiKey}&language=${this.language}-US`, {
      observe: 'response',
    }).pipe(
      tap(resp => { this.limitsCalculate(resp) }),
      delay(this.delay)
    )
  }

  getSimilarSeries(seriesId: number, page: number = 1): Observable<SearchDataRepsonse> {
    return this.http.get<SearchData>(`${environment.apiUrl}tv/${seriesId}/similar?api_key=${environment.apiKey}&language=${this.language}-US&page=${page}`, {
      observe: 'response',
    }).pipe(
      tap(resp => { this.limitsCalculate(resp) }),
      delay(this.delay)
    )
  }

  getLastWeekTrends(): Observable<SearchDataRepsonse> {
    return this.http.get<SearchData>(`${environment.apiUrl}trending/tv/week?api_key=${environment.apiKey}`, {
      observe: 'response',
    }).pipe(
      tap(resp => { this.limitsCalculate(resp) }),
      delay(this.delay)
    )
  }

  getLastTrends(page: number): Observable<SearchDataRepsonse> {
    return this.http.get<SearchData>(`${environment.apiUrl}tv/popular?api_key=${environment.apiKey}&language=${this.language}-US&page=${page}`, {
      observe: 'response',
    }).pipe(
      tap(resp => { this.limitsCalculate(resp) }),
      delay(this.delay)
    )
  }

  getPremieres(date: string, page: number): Observable<SearchDataRepsonse> {
    return this.http.get<SearchData>(`${environment.apiUrl}discover/tv?api_key=${environment.apiKey}&language=${this.language}-US&sort_by=vote_average.asc&first_air_date.gte=${date}&first_air_date.lte=${date}&page=${page}&timezone=America%2FNew_York&include_null_first_air_dates=false`, {
      observe: 'response',
    }).pipe(
      tap(resp => { this.limitsCalculate(resp) }),
      delay(this.delay)
    )
  }

  getTopratedSeries(page: number): any {
    return this.http.get<SearchData>(`${environment.apiUrl}tv/top_rated?api_key=${environment.apiKey}&language=${this.language}-US&page=${page}`, {
      observe: 'response',
    }).pipe(
      tap(resp => { this.limitsCalculate(resp) }),
      delay(this.delay)
    )
  }
}
