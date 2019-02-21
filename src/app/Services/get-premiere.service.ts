import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ChangeLanguageService } from './change-language.service';

@Injectable({
  providedIn: 'root'
})
export class GetPremiereService {

  language: string;

  constructor(private http: HttpClient, private changeLanguageService: ChangeLanguageService) { 
    this.language = this.changeLanguageService.getInfoLanguage();
  }

  getPremieres(date: string, page: number): Observable<any> {
    return this.http.get<Array<String>>(`${environment.apiUrl}discover/tv?api_key=${environment.apiKey}&language=${this.language}-US&sort_by=vote_average.asc&first_air_date.gte=${date}&first_air_date.lte=${date}&page=${page}&timezone=America%2FNew_York&include_null_first_air_dates=false`)
  }

}
