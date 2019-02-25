import { Component, OnInit } from '@angular/core';
import { GetPremiereService } from '../../../Services/get-premiere.service'
import { trigger, transition, useAnimation } from '@angular/animations';
import { slideInLeft, slideInRight  } from 'ng-animate';
import { SearchedSerie } from '../../../shared/models/searchedSerie.model';
import * as moment from 'moment';
import { PremieresData } from 'src/app/shared/models/premieresData.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-premiere',
  templateUrl: './premiere.component.html',
  styleUrls: ['./premiere.component.scss'],
  animations: [
    trigger('openClose', [
      transition('nothing => right', [
        useAnimation(slideInRight, {})
      ]),
      transition('nothing => left', [
        useAnimation(slideInLeft, {})
      ]),
    ]),
  ],
})
export class PremiereComponent implements OnInit {

  constructor( private getPremiereService: GetPremiereService ) { }
  
  ngOnInit() { 
    this.getPremieres() 
  }

  isOpen: string = 'nothing';
  date: string = moment().format('YYYY-MM-DD');
  series: Array<SearchedSerie> = [];
  loading: boolean = true;
  url: string = environment.posterUrl;
  fullUrl: string;
  title: string;

  dayLater(): void {
    this.loading = true;
    this.date = moment(this.date).add("days", 1).format('YYYY-MM-DD');
    
    this.getPremieres();
    this.isOpen = 'right';
    setTimeout(() => { 
      this.isOpen = 'nothing'; 
    }, 900);
  }
  dayBefore(): void {
    this.loading = true;
    this.date = moment(this.date).subtract("days", 1).format('YYYY-MM-DD');
    
    this.getPremieres();
    this.isOpen = 'left';
    setTimeout(() => { 
      this.isOpen = 'nothing'; 
    }, 900);
  }

  getPremieres(): void {
    this.series = [];
    this.loading = true;
    let numberOfPages: number;
    this.getPremiereService.getPremieres(this.date, 1).subscribe((data: PremieresData) => {   
      numberOfPages = data.total_pages; 
      for(let i = 0; data.results.length -1 >= i; i++) {
        this.series.push(data.results[i]) 
      }
    }, error => console.log(error),
    () => {
      if (numberOfPages > 1) {
        for(let i = 2; numberOfPages <= 1; i++) {
          this.getPremiereService.getPremieres(this.date, i).subscribe((data: PremieresData) => {    
            for(let i = 0; data.results.length -1 >= i; i++) {
              this.series.push(data.results[i]) 
            }    
          }), error => console.log(error),
          () => {
            this.loading = false
          }
        }
      } else {
        this.loading = false
      }
    })
  }
}
