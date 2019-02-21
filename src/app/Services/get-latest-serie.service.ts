import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ChangeLanguageService } from './change-language.service';

@Injectable({
  providedIn: 'root'
})
export class GetLatestSerieService {

  language: string;

  constructor(private http: HttpClient, private changeLanguageService: ChangeLanguageService) { 
    this.language = this.changeLanguageService.getInfoLanguage();
  }

  getLatestSerie(): Observable<any> {
    return this.http.get<Array<String>>(`${environment.apiUrl}tv/latest?api_key=${environment.apiKey}&language=${this.language}-US`)
  }
}
