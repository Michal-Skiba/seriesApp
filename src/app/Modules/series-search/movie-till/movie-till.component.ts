import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { GetSeriesService } from '@services/get-series.service';
import { environment } from '@environments/environment';
import { SearchedSerie } from '@models/searchedSerie.model';
import { Season } from '@models/season.model';
import { Actors } from '@models/actors.model';
import { Episode } from '@models/episode.model';

@Component({
  selector: 'app-movie-till',
  templateUrl: './movie-till.component.html',
  styleUrls: ['./movie-till.component.scss']
})
export class MovieTillComponent implements OnInit, OnChanges {
 
  constructor(private getSeriesService: GetSeriesService) { }

  @Input() id: number
  @Input() tillViev: boolean

  loading: boolean = true;
  similarSeriesDisplay: Boolean = false;
  fullUrl: string;
  title: string;
  seasons: Array<Season>;
  seasonsEpisodes: Episode = {} as Episode;
  actors: Array<Actors>;
  actorsError: boolean = false;
  similarSeries: Array<SearchedSerie>;

  @Output()
  showDetailsFlag = new EventEmitter<boolean>();

  ngOnInit() {
    this.getSeriesService.getSimilarSeries(this.id).subscribe(series => {
      this.similarSeries = series.results;
      this.similarSeriesDisplay = true;
    }, error => {
      console.log(error, 'similar')
    })
    this.getSeriesService.getCredits(this.id).subscribe(dataCredits => {
      this.actors = dataCredits.cast;
    }, error => {
      console.log(error, 'getseiresservice credis')
      this.actorsError = true;
    })
  }

  ngOnChanges(): void {
    this.loading = true;
    this.getSeriesInfo(this.id);  
  }

  getEpisodesInfo(): void {
    for(let i = 1; i < this.seasons.length + 1; i++) {
      this.getSeriesService.getSeasonEpisode(this.id, i).subscribe(seasonsInfo => {
        this.seasonsEpisodes[i] = seasonsInfo.episodes;
      }, error => console.log(error, 'getSeasonEpisod', error.status)
    )}
  }

  showDetails(): void {
    this.showDetailsFlag.emit(true)
  }

  getSeriesInfo(id: number): void {
    this.getSeriesService.getSeriesDetail(id).subscribe(dataSeries => {
      this.fullUrl = environment.posterUrl + dataSeries.backdrop_path;
      this.title = dataSeries.name;
      this.seasons = dataSeries.seasons;
    }, error => console.log(error, 'seriesss'),
    () => {
      this.getEpisodesInfo();
      this.loading = false;
    })
  }
}
