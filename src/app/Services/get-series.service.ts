import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ChangeLanguageService } from './change-language.service';
import { SerieDetail } from '../shared/models/serieDetail.model';
import { SearchData } from '../shared/models/searchData.model';
import { Credits } from '../shared/models/credits.model';
import { SeasonEpiosodes } from '../shared/models/seasonEpiosed.model';

@Injectable({
  providedIn: 'root'
})
export class GetSeriesService {
  
  language: string;
  
  constructor(private http: HttpClient, private changeLanguageService: ChangeLanguageService) { 
    this.language = this.changeLanguageService.getInfoLanguage();
  }

  getSeriesDetail(seriesId: number): Observable<SerieDetail> {
    return this.http.get<SerieDetail>(`${environment.apiUrl}tv/${seriesId}?api_key=${environment.apiKey}&language=${this.language}-US`)
    .pipe(
      retry(20),
    )
  }

  searchSeries(seriesTitle: string, page: number): Observable<SearchData> {
    return this.http.get<SearchData>(`${environment.apiUrl}search/tv?api_key=${environment.apiKey}&language=${this.language}-US&query=${seriesTitle}&page=${page}`) 
    .pipe(
      retry(20),
    )
  }

  getCredits(seriesId: number): Observable<Credits> {
    return this.http.get<Credits>(`${environment.apiUrl}tv/${seriesId}/season/{season_number}/credits?api_key=${environment.apiKey}&language=${this.language}-US`)
    .pipe(
      retry(20),
    )
  }

  getSeasonEpisode(seriesId: number, seasonNumber: number): Observable<SeasonEpiosodes> {
    return this.http.get<SeasonEpiosodes>(`${environment.apiUrl}tv/${seriesId}/season/${seasonNumber}?api_key=${environment.apiKey}&language=${this.language}-US`)
    .pipe(
      retry(20),
    )
  }

  getSimilarSeries(seriesId: number, page: number = 1): Observable<SearchData> {
    return this.http.get<SearchData>(`${environment.apiUrl}tv/${seriesId}/similar?api_key=${environment.apiKey}&language=${this.language}-US&page=${page}`)
    .pipe(
      retry(20),
    )
  }
}

  // getSeriesDetailAnotherLanguage(seriesId: number): Observable<any> {
  //   let language = '';
  //   if (this.language = 'en') {
  //     language = 'pl'
  //   } else if (this.language = 'pl') {
  //     language = 'en'
  //   }
  //   return this.http.get<Array<String>>(`${environment.apiUrl}tv/${seriesId}?api_key=${environment.apiKey}&language=${language}-US`)
  //   .pipe(
  //     retry(20),
  //   )
  // }