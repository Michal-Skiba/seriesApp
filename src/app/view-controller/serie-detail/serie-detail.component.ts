import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router} from '@angular/router';
import { ShowSeriesDetailService } from '../../series-search/shared/show-series-detail.service';
import { SeriesService } from '@services/series.service';
import { SearchedSerie } from '@models/searchedSerie.model';
import { environment } from '@environments/environment';
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
  loading = true;
  similarSeries: Array<SearchedSerie> = [];
  private similarSeriesLoader = false;
  similarSeriesPageNumber = 2;
  similarSeriesLastPage: number;
  imageFullUrl: string;
  seasons: Array<Season>;
  seasonsEpisodes: Episode = {} as Episode;
  actors: Array<Actors>;
  actorsError = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private showSeriesDetailService: ShowSeriesDetailService,
    private seriesService: SeriesService
  ) { }

  ngOnInit() {
    this.showSeriesDetailService.showUp();
    this.fetchRouteParam();
    this.fetchSeriesDetail();
    this.fetchSimilarSeries();
    this.fetchCredits();
  }

  ngOnDestroy(): void {
    this.showSeriesDetailService.showDown();
  }

  private fetchRouteParam(): void {
    this.route.paramMap.subscribe((param: Params) => {
      this.id = param.get('id');
    });
  }

  private fetchSeriesDetail(): void {
    this.seriesService.getSeriesDetail(this.id).subscribe(dataSerie => {
        this.title = dataSerie.name;
        this.imageFullUrl = environment.posterUrl + dataSerie.backdrop_path;
        this.seasons = dataSerie.seasons;
      }, () => null,
      () => {
        this.getEpisodesInfo();
        this.loading = false;
      });
  }

  private fetchSimilarSeries(): void {
    this.seriesService.getSimilarSeries(this.id).subscribe(data => {
      this.similarSeries = data.results;
      this.similarSeriesLastPage = data.total_pages;
    });
  }

  private fetchCredits(): void {
    this.seriesService.getCredits(this.id).subscribe(dataCredits => {
      this.actors = dataCredits.cast;
    }, () => {
      this.actorsError = true;
    });
  }

  private getEpisodesInfo(): void {
    for (let i = 0; i < this.seasons.length; i++) {
      this.seriesService.getSeasonEpisode(this.id, i).subscribe(seasonsInfo => {
        this.seasonsEpisodes[i] = seasonsInfo.episodes;
      }
      );
    }
  }

  private loadMore(): void {
    this.similarSeriesLoader = true;
    this.seriesService.getSimilarSeries(this.id, this.similarSeriesPageNumber).subscribe(data => {
      this.similarSeries.push(...data.results);
    }, () => null,
      () => {
        this.similarSeriesLoader = false;
      });
    this.similarSeriesPageNumber += 1;
  }

  private changeRouteBySeries(id): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    };
    this.router.navigateByUrl(`/search/${id}`);
  }
}
