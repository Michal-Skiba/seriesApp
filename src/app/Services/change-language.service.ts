import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChangeLanguageService {
  private language: string;
  private choosenLanguage = new Subject<string>();
  constructor() {
    if (localStorage.getItem('language')) {
      this.language = localStorage.getItem('language')
      this.choosenLanguage.next(this.language);
    } else {
      this.language = 'en'
    }
  }

  changeLanguage(choosenLanguage: string): void {
    this.language = choosenLanguage;
    this.choosenLanguage.next(this.language);
    localStorage.setItem('language', choosenLanguage);
  }

  getLanguageInfoObs(): Observable<string> {
    return this.choosenLanguage.asObservable();
  }

  getInfoLanguage(): string {
    return this.language
  }
}
