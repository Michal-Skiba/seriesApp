import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class GetLastTrendsService {

  constructor(private http: HttpClient) { }
  apiKey: string = 'fbf021c3b54ef79e35757c4a9f21f7cd';

  getLastTrends(page: number): Observable<any> {
    return this.http.get<Array<String>>(`https://api.themoviedb.org/3/tv/popular?api_key=${this.apiKey}&language=en-US&page=${page}`)
  }
}
