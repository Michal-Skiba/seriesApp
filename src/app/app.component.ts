import { Component, OnInit } from '@angular/core';
import { ChangeLanguageService } from './Services/change-language.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  constructor(private changeLanguageService: ChangeLanguageService) { }
  ngOnInit() { }


  getLanguage() {
    return this.changeLanguageService.getInfoLanguage()
  }

  changeLanguage(language: string) {
    this.changeLanguageService.changeLanguage(language)
    window.location.reload();
  }

}
