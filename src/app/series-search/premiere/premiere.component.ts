import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { slideInLeft, slideInRight } from 'ng-animate';
import { SearchedSerie } from '@models/searchedSerie.model';
import * as moment from 'moment';
import { SearchData } from '@models/searchData.model';
import { environment } from '@environments/environment';
import { SeriesService } from '@services/../../shared/services/series.service';

@Component({
  selector: 'app-premiere',
  templateUrl: './premiere.component.html',
  styleUrls: ['./premiere.component.scss'],
  animations: [
    trigger('openClose', [
      transition('nothing => right', [
        useAnimation(slideInRight)
      ]),
      transition('nothing => left', [
        useAnimation(slideInLeft)
      ]),
    ]),
  ],
})
export class PremiereComponent implements OnInit {
  isOpen = 'nothing';
  date: string = moment().format('YYYY-MM-DD');
  series: Array<SearchedSerie> = [];
  loading = true;
  url = environment.posterUrl;

  constructor(private seriesService: SeriesService) {}

  ngOnInit() {
    this.getPremieres();
  }

  public dayLater(): void {
    this.getPremieres();
    this.date = moment(this.date).add('days', 1).format('YYYY-MM-DD');
    this.isOpen = 'right';
    setTimeout(() => {
      this.isOpen = 'nothing';
    }, 900);
  }

  public dayBefore(): void {
    this.getPremieres();
    this.date = moment(this.date).subtract('days', 1).format('YYYY-MM-DD');
    this.isOpen = 'left';
    setTimeout(() => {
      this.isOpen = 'nothing';
    }, 900);
  }

  private getPremieres(): void {
    this.series = [];
    this.loading = true;
    let numberOfPages: number;
    this.seriesService.getPremieres(this.date, 1).subscribe((data: SearchData) => {
        numberOfPages = data.total_pages;
        for (let i = 0; data.results.length - 1 >= i; i++) {
          this.series.push(data.results[i]);
        }
      }, () => null,
      () => {
        if (numberOfPages > 1) {
          for (let i = 2; numberOfPages >= i; i++) {
            this.seriesService.getPremieres(this.date, i).subscribe((data: SearchData) => {
              for ( i = 0; data.results.length - 1 >= i; i++) {
                this.series.push(data.results[i]);
              }
            }, () => null,
              () => {
                this.loading = false;
              });
          }
        } else {
          this.loading = false;
        }
      });
  }
}
