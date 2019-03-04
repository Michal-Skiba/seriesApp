import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'
import { ShowSeriesDetalService } from '@services/show-series-detail.service'
import { SeriesService } from '@services/series.service';
import { SearchedSerie } from '@models/searchedSerie.model';
import { environment } from '@environments/environment'

@Component({
  selector: 'app-serie-detail',
  templateUrl: './serie-detail.component.html',
  styleUrls: ['./serie-detail.component.scss']
})
export class SerieDetailComponent implements OnInit, OnDestroy {
  
  title: string;
  id: number;
  loading: boolean = true;
  similarSeries: Array<SearchedSerie> = [];
  similarSeriesLoader: boolean = false;
  similarSeriesPageNumber: number = 2;
  similarSeriesLastPage: number;
  imageFullUrl: string;

  constructor(
    private route: ActivatedRoute,
    private showSeriesDetalService: ShowSeriesDetalService,
    private SeriesService: SeriesService
  ) { }

  ngOnInit() {
    this.showSeriesDetalService.showUp();
    this.route.paramMap.subscribe((param: Params) => {
      this.id = param.get('id')
    })
    this.SeriesService.getSeriesDetail(this.id).subscribe(dataSerie => {
      this.title = dataSerie.name;
      this.imageFullUrl = environment.posterUrl + dataSerie.backdrop_path;
    }, error => console.log(error),
    () => {
      this.loading = false;
    })
    this.SeriesService.getSimilarSeries(this.id).subscribe(data => {
      this.similarSeries = data.results;
      this.similarSeriesLastPage = data.total_pages;
    })
  }

  loadMore(): void {
    this.similarSeriesLoader = true;
    this.SeriesService.getSimilarSeries(this.id).subscribe(data => {
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

  ngOnDestroy(): void {
    this.showSeriesDetalService.showDown();
  }

}
