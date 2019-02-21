import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ChangeLanguageService } from './change-language.service';

@Injectable({
  providedIn: 'root'
})
export class GetLastTrendsService {
  
  language: string;

  constructor(private http: HttpClient, private changeLanguageService: ChangeLanguageService) { 
    this.language = this.changeLanguageService.getInfoLanguage();
  }

  getLastTrends(page: number): Observable<any> {
    return this.http.get<Array<String>>(`${environment.apiUrl}tv/popular?api_key=${environment.apiKey}&language=${this.language}-US&page=${page}`)
  }
}
