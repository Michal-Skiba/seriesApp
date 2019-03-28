import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChangeLanguageService {
  private language: string;
  private chosenLanguage = new Subject<string>();
  constructor() {
    if (sessionStorage.getItem('language')) {
      this.language = sessionStorage.getItem('language');
      this.chosenLanguage.next(this.language);
    } else {
      this.language = 'en';
    }
  }

  changeLanguage(chosenLanguage: string): void {
    this.language = chosenLanguage;
    this.chosenLanguage.next(this.language);
    sessionStorage.setItem('language', chosenLanguage);
  }

  getInfoLanguage(): string {
    return this.language;
  }
}
