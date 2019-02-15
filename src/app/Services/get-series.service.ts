import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class GetSeriesService {
  constructor(private http: HttpClient) { }
  apiKey: string = 'fbf021c3b54ef79e35757c4a9f21f7cd';

  getSeriesDetail(seriesId: number): Observable<any> {
    return this.http.get<Array<String>>(`https://api.themoviedb.org/3/tv/${seriesId}?api_key=${this.apiKey}&language=en-US`)
    .pipe(
      retry(20),
    )
  }

  searchSeries(seriesTitle: string, page: number): Observable<any> {
    return this.http.get<Array<String>>(`https://api.themoviedb.org/3/search/tv?api_key=${this.apiKey}&language=en-US&query=${seriesTitle}&page=${page}`) 
    .pipe(
      retry(20),
    )
  }

  getCredits(seriesId: number): Observable<any> {
    return this.http.get<Array<String>>(`https://api.themoviedb.org/3/tv/${seriesId}/season/{season_number}/credits?api_key=${this.apiKey}&language=en-US`)
    .pipe(
      retry(20),
    )
  }

  getSeasonEpisode(seriesId: number, seasonNumber: number): Observable<any> {
    return this.http.get<Array<String>>(`https://api.themoviedb.org/3/tv/${seriesId}/season/${seasonNumber}?api_key=${this.apiKey}&language=en-US`)
    .pipe(
      retry(20),
    )
  }

  getSimilarSeries(seriesId: number): Observable<any> {
    return this.http.get<Array<String>>(`https://api.themoviedb.org/3/tv/${seriesId}/similar?api_key=${this.apiKey}&language=en-US&page=1`)
    .pipe(
      retry(20),
    )
  }
}
