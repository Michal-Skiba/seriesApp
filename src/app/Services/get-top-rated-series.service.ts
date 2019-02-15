import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AppConst } from '../shared/const';

@Injectable({
  providedIn: 'root'
})
export class GetTopRatedSeriesService {
  constructor(private http: HttpClient) { }
  
  getTopratedSeries(page: number): Observable<any> {
    return this.http.get<Array<String>>(`${AppConst.apiUrl}tv/top_rated?api_key=${AppConst.apiKey}&language=en-US&page=${page}`)
  }

}
