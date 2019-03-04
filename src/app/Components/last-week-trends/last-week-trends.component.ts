import { Component } from '@angular/core';
import { SeriesService } from '@services/series.service'
import { environment } from '@environments/environment';
import { Router } from '@angular/router'

@Component({
  selector: 'app-last-week-trends',
  templateUrl: './last-week-trends.component.html',
  styleUrls: ['./last-week-trends.component.scss']
})
export class LastWeekTrendsComponent {

  constructor(private  getSeriesService: SeriesService, private router: Router) { }

  lastWeekTrends$ = this.getSeriesService.getLastTrends();
  posterUrl = environment.posterUrl;

  showInfo(id: number) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    };
    this.router.navigate([`./search/${id}`])
  }

}
