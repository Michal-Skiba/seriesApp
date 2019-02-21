import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'
import { ShowSeriesDetalService } from '../../../Services/show-series-detail.service'
import { GetSeriesService } from '../../../Services/get-series.service';
import { searchedSerie } from '../../../shared/models/searchedSerie.model';

@Component({
  selector: 'app-serie-detail',
  templateUrl: './serie-detail.component.html',
  styleUrls: ['./serie-detail.component.scss']
})
export class SerieDetailComponent implements OnInit, OnDestroy {
  
  id: number;
  url: string = 'https://image.tmdb.org/t/p/w500/';
  imageFullUrl: string;
  title: string;
  overview: string;
  numberOfEpisodes: number;
  numberOfSesons: number;
  premiereDate: string;
  rating: string;
  loading: boolean = true;
  similarSeries: Array<searchedSerie> = [];
  similarSeriesLoader: boolean = false;
  similarSeriesPageNumber: number = 2;
  similarSeriesLastPage: number;

  constructor(
    private route: ActivatedRoute,
    private showSeriesDetalService: ShowSeriesDetalService,
    private getSeriesService: GetSeriesService
    ) { }

  ngOnInit() {
    this.showSeriesDetalService.showUp();
    this.route.paramMap.subscribe((param: Params) => {
      this.id = param.get('id')
    })
    this.getSeriesService.getSeriesDetail(this.id).subscribe((dataSerie) => {
      this.imageFullUrl = this.url + dataSerie.backdrop_path;
      this.title = dataSerie.name;
      this.overview = dataSerie.overview;
      this.numberOfEpisodes = dataSerie.number_of_episodes;
      this.numberOfSesons = dataSerie.number_of_seasons;
      this.premiereDate = dataSerie.first_air_date;
      this.rating = dataSerie.vote_average;
    }, error => console.log(error),
    () => {
      this.loading = false;
    }
    )
    this.getSeriesService.getSimilarSeries(this.id).subscribe((data) => {
      this.similarSeries = data.results;
      this.similarSeriesLastPage = data.total_pages;
    })
  }

  loadMore(): void {
    this.similarSeriesLoader = true;
    this.getSeriesService.getSimilarSeries(this.id).subscribe((data) => {
      this.similarSeries.push(...data.results);
    }, error => console.log(error),
    () => {
      this.similarSeriesLoader = false;
    })
    this.similarSeriesPageNumber += 1;
  }

  reload(): void {
    location.reload();
  }

  ngOnDestroy() {
    this.showSeriesDetalService.showDown();
  }


}
