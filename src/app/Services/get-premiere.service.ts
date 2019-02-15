import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class GetPremiereService {

  constructor(private http: HttpClient) { }
  apiKey: string = 'fbf021c3b54ef79e35757c4a9f21f7cd';

  getPremieres(date: string, page: number): Observable<any> {
    return this.http.get<Array<String>>(`https://api.themoviedb.org/3/discover/tv?api_key=${this.apiKey}&language=en-US&sort_by=vote_average.asc&first_air_date.gte=${date}&first_air_date.lte=${date}&page=${page}&timezone=America%2FNew_York&include_null_first_air_dates=false`)
  }

}
