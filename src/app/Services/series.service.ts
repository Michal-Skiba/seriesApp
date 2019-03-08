import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ChangeLanguageService } from './change-language.service';
import { SerieDetail } from '@models/serieDetail.model';
import { SearchData } from '@models/searchData.model';
import { Credits } from '@models/credits.model';
import { SeasonEpiosodes } from '@models/seasonEpiosed.model';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  
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
    return this.http.get<Credits>(`${environment.apiUrl}tv/${seriesId}/credits?api_key=${environment.apiKey}&language=${this.language}-US`)
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

  getLastTrends(): Observable<SearchData> {
    return this.http.get<SearchData>(`${environment.apiUrl}trending/tv/week?api_key=${environment.apiKey}`);
  }

}
