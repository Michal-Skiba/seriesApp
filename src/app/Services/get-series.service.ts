import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { AppConst } from '../shared/const';

@Injectable({
  providedIn: 'root'
})
export class GetSeriesService {
  constructor(private http: HttpClient) { }

  getSeriesDetail(seriesId: number): Observable<any> {
    return this.http.get<Array<String>>(`${AppConst.apiUrl}tv/${seriesId}?api_key=${AppConst.apiKey}&language=en-US`)
    .pipe(
      retry(20),
    )
  }

  searchSeries(seriesTitle: string, page: number): Observable<any> {
    return this.http.get<Array<String>>(`${AppConst.apiUrl}search/tv?api_key=${AppConst.apiKey}&language=en-US&query=${seriesTitle}&page=${page}`) 
    .pipe(
      retry(20),
    )
  }

  getCredits(seriesId: number): Observable<any> {
    return this.http.get<Array<String>>(`${AppConst.apiUrl}tv/${seriesId}/season/{season_number}/credits?api_key=${AppConst.apiKey}&language=en-US`)
    .pipe(
      retry(20),
    )
  }

  getSeasonEpisode(seriesId: number, seasonNumber: number): Observable<any> {
    return this.http.get<Array<String>>(`${AppConst.apiUrl}tv/${seriesId}/season/${seasonNumber}?api_key=${AppConst.apiKey}&language=en-US`)
    .pipe(
      retry(20),
    )
  }

  getSimilarSeries(seriesId: number, page: number = 1): Observable<any> {
    return this.http.get<Array<String>>(`${AppConst.apiUrl}tv/${seriesId}/similar?api_key=${AppConst.apiKey}&language=en-US&page=${page}`)
    .pipe(
      retry(20),
    )
  }
}