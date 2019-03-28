import { Component } from '@angular/core';
import { ChangeLanguageService } from '@services/change-language.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  constructor(private changeLanguageService: ChangeLanguageService) { }

  getLanguage() {
    return this.changeLanguageService.getInfoLanguage();
  }

  changeLanguage(language: string) {
    this.changeLanguageService.changeLanguage(language);
    window.location.reload();
  }
}
