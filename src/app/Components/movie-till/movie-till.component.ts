import { Component, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { SeriesService } from '@services/series.service';
import { environment } from '@environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-till',
  templateUrl: './movie-till.component.html',
  styleUrls: ['./movie-till.component.scss']
})
export class MovieTillComponent implements OnChanges {

  constructor(private getSeriesService: SeriesService, private router: Router) { }

  @Input() id: number

  loading: boolean = true;
  fullUrl: string;
  title: string;
  overview: string;

  ngOnChanges(): void {
    this.loading = true;
    this.getSeriesInfo(this.id);
  }

  showDetails(id: string): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    };
    this.router.navigate([`/search/${id}`])
  }

  getSeriesInfo(id: number): void {
    this.getSeriesService.getSeriesDetail(id).subscribe(dataSeries => {
      this.fullUrl = environment.posterUrl + dataSeries.backdrop_path;
      this.title = dataSeries.name;
      this.overview = dataSeries.overview;
    }, () => null,
      () => {
        this.loading = false;
      })
  }
}
