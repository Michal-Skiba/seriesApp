import { Component } from '@angular/core';
import { ChangeLanguageService } from '@services/change-language.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  constructor(private changeLanguageService: ChangeLanguageService) { }
  getLanguage() {
    return this.changeLanguageService.getInfoLanguage();
  }

  changeLanguage(language: string) {
    this.changeLanguageService.changeLanguage(language);
    window.location.reload();
  }

}
