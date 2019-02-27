import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ChangeLanguageService } from './change-language.service';
import { SearchData } from '@models/searchData.model';

@Injectable({
  providedIn: 'root'
})
export class GetTopRatedSeriesService {

  language: string;

  constructor(private http: HttpClient, private changeLanguageService: ChangeLanguageService) { 
    this.language = this.changeLanguageService.getInfoLanguage();
  }
  
  getTopratedSeries(page: number): Observable<SearchData> {
    return this.http.get<SearchData>(`${environment.apiUrl}tv/top_rated?api_key=${environment.apiKey}&language=${this.language}-US&page=${page}`)
  }

}
