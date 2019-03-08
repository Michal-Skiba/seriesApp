import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'
import { ShowSeriesDetalService } from '@services/show-series-detail.service'
import { SeriesService } from '@services/series.service';
import { SearchedSerie } from '@models/searchedSerie.model';
import { environment } from '@environments/environment'
import { Season } from '@models/season.model';
import { Episode } from '@models/episode.model';
import { Actors } from '@models/actors.model';

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
  seasons: Array<Season>;
  seasonsEpisodes: Episode = {} as Episode;
  actors: Array<Actors>;
  actorsError: boolean = false;

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
      this.seasons = dataSerie.seasons;
    }, () => null,
    () => {
      this.getEpisodesInfo();
      this.loading = false;
    })
    this.SeriesService.getSimilarSeries(this.id).subscribe(data => {
      this.similarSeries = data.results;
      this.similarSeriesLastPage = data.total_pages;
    })
    this.SeriesService.getCredits(this.id).subscribe(dataCredits => {
      this.actors = dataCredits.cast;
    }, () => {
      this.actorsError = true;
    })
  }

  getEpisodesInfo(): void {
    for(let i = 0; i < this.seasons.length ; i++) {
      this.SeriesService.getSeasonEpisode(this.id, i).subscribe(seasonsInfo => {
        this.seasonsEpisodes[i] = seasonsInfo.episodes;
      }
    )}
  }
  
  
  loadMore(): void {
    this.similarSeriesLoader = true;
    this.SeriesService.getSimilarSeries(this.id, this.similarSeriesPageNumber).subscribe(data => {
      this.similarSeries.push(...data.results);
    }, () => null,
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
