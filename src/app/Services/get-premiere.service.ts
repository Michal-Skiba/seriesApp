import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AppConst } from '../shared/const';

@Injectable({
  providedIn: 'root'
})
export class GetPremiereService {

  constructor(private http: HttpClient) { }

  getPremieres(date: string, page: number): Observable<any> {
    return this.http.get<Array<String>>(`${AppConst.apiUrl}discover/tv?api_key=${AppConst.apiKey}&language=en-US&sort_by=vote_average.asc&first_air_date.gte=${date}&first_air_date.lte=${date}&page=${page}&timezone=America%2FNew_York&include_null_first_air_dates=false`)
  }

}
