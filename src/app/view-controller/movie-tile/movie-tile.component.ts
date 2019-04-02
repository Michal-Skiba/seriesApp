import { Component, Input, OnChanges } from '@angular/core';
import { SeriesService } from '@services/series.service';
import { environment } from '@environments/environment';
import { Router } from '@angular/router';
import { SerieDetail } from '@models/serieDetail.model';

@Component({
  selector: 'app-movie-till',
  templateUrl: './movie-tile.component.html',
  styleUrls: ['./movie-tile.component.scss']
})
export class MovieTileComponent implements OnChanges {

  constructor(private getSeriesService: SeriesService, private router: Router) {}

  @Input() id: number;

  public loading = true;
  private fullUrl: string;
  private serieDetails: SerieDetail;

  ngOnChanges(): void {
    this.loading = true;
    this.getSeriesInfo(this.id);
  }

  private showDetails(id: string): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    };
    this.router.navigate([`/search/${id}`]);
  }

  private getSeriesInfo(id: number): void {
    this.serieDetails = JSON.parse(sessionStorage.getItem(String(id)));
    if (!this.serieDetails) {
      this.fetchSeriesDetails(id);
    } else {
      this.fullUrl = environment.posterUrl + this.serieDetails.backdrop_path;
      this.loading = false;
    }
  }

  private fetchSeriesDetails(id: number): void {
    this.getSeriesService.getSeriesDetail(id).subscribe(dataSeries => {
        sessionStorage.setItem(String(id), JSON.stringify(dataSeries));
        this.serieDetails = dataSeries;
        this.fullUrl = environment.posterUrl + dataSeries.backdrop_path;
      }, () => null,
      () => {
        this.loading = false;
      });
  }
}
