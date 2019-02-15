import { Component, OnInit } from '@angular/core';
import { GetPremiereService } from '../../../Services/get-premiere.service'
import { trigger, transition, useAnimation, state, style, animate } from '@angular/animations';
import { slideInLeft, slideInRight  } from 'ng-animate';
import * as moment from 'moment';

export interface seriesData {
  results: Array<object>;
  total_pages: number;
}


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
    console.log(this.series)
  }

  isOpen:string  = 'nothing';
  date: string = moment().format('YYYY-MM-DD');
  series: Array<object> = [];
  loading: boolean = false;
  url: string = 'https://image.tmdb.org/t/p/w500/';
  fullUrl: string;
  title: string;
  showDetails() {
    console.log('test')
  }

  dayLater() {
      this.date = moment(this.date).add("days", 1).format('YYYY-MM-DD')
      this.getPremieres() 
      this.isOpen = 'right'
      setTimeout(() => { 
        this.isOpen = 'nothing'; 
      }, 900);
    }
  dayBefore() {
    this.date = moment(this.date).subtract("days", 1).format('YYYY-MM-DD')
    this.getPremieres() 
    this.isOpen = 'left'
    setTimeout(() => { 
      this.isOpen = 'nothing'; 
    }, 900);
  }



  getPremieres() {
    this.series = [];
    this.loading = true;
    let numberOfPages: number;
    this.getPremiereService.getPremieres(this.date, 1).subscribe((data: seriesData) => {   
      numberOfPages = data.total_pages; 
      for(let i = 0; data.results.length -1 >= i; i++) {
        this.series.push(data.results[i]) 
      }
      console.log(this.series)
    }), error => console.log(error),
    () => {
      console.log('sss')
      if (numberOfPages > 1) {
        for(let i = 2; numberOfPages <= 1; i++) {
          this.getPremiereService.getPremieres(this.date, i).subscribe((data: seriesData) => {    
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
    }
  }
}
