import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AppConst } from '../shared/const';

@Injectable({
  providedIn: 'root'
})
export class GetLatestSerieService {

  constructor(private http: HttpClient) { }

  getLatestSerie(): Observable<any> {
    return this.http.get<Array<String>>(`${AppConst.apiUrl}tv/latest?api_key=${AppConst.apiKey}&language=en-US`)
  }

}
