import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { GetSeriesService } from '../../../Services/get-series.service';
import { AppConst } from '../../../shared/const';

export interface nextEpisodData {
  air_date: string;
  name: string;
}

@Component({
  selector: 'app-movie-till',
  templateUrl: './movie-till.component.html',
  styleUrls: ['./movie-till.component.scss']
})
export class MovieTillComponent implements OnInit, OnChanges {
 
  constructor(private getSeriesService: GetSeriesService) { }

  loading: boolean = true;
  fullUrl: string;
  title: string;
  popularity: string;
  numberOfEpisodes: string;
  numberOfSeasons: number; 
  premiere: string; 
  overview: string;
  seasons: Array<object>;
  seasonsEpisodes: object = {};
  filmwebLink: string = AppConst.filmwebLink;
  imdbLink: string = AppConst.imdbLink;
  producents: Array<object>;
  actors: Array<object>;
  actorsError: boolean = false;
  status: string;
  producers: Array<object>;
  countryOfOrigin: Array<string>;
  genres: Array<object>;
  similarSeries: Array<object>;
  similarSeriesErr: Boolean = false;
  similarSeriesDisplay: Boolean = false;
  nextEpisodeDate: nextEpisodData;
  countDownTime: string;
  errorId: number;

  @Output()
  showDetailsFlag = new EventEmitter<boolean>();

  ngOnInit() {
    this.getSeriesService.getSimilarSeries(this.id).subscribe(series => {
      this.similarSeries = series.results;
      this.similarSeriesDisplay = true;
    }, error => {
      console.log(error, 'similar')
      this.similarSeriesErr = true;
    })

    console.log(AppConst.posterUrl)

    this.getSeriesService.getCredits(this.id).subscribe(dataCredits => {
      this.actors = dataCredits.cast;
    }, error => {
      console.log(error, 'getseiresservice credis')
      this.actorsError = true;
    })
  }

  ngOnChanges() {
    this.loading = true;
    this.getSeriesInfo(this.id);  
  }

  @Input() id: number
  @Input() tillViev: boolean

  getEpisodesInfo(): void {
    for(let i = 0; i < this.seasons.length; i++) {
      this.getSeriesService.getSeasonEpisode(this.id, i).subscribe(seasonsInfo => {
        this.seasonsEpisodes[i] = seasonsInfo.episodes;
      }, error => console.log(error, 'getSeasonEpisod', error.status)
      )}
  }

  showDetails(): void {
    this.showDetailsFlag.emit(true)
  }

  countDownTimer() {
    if(this.nextEpisodeDate) {
      const countDownDate = new Date(this.nextEpisodeDate.air_date + " " + " 10:00:00").getTime();
      setInterval(() => {
        const now = new Date().getTime();
        const distance = countDownDate - now;
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        this.countDownTime = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s "
      }, 1000)
      this.nextEpisodeDate.air_date;
    } else {
      return 'Brak danych'
    }
  }

  getSeriesInfo(id: number): void {
    this.getSeriesService.getSeriesDetail(id).subscribe(dataSeries => {
      this.fullUrl = AppConst.posterUrl + dataSeries.backdrop_path;
      this.title = dataSeries.name;
      this.popularity = dataSeries.popularity;
      this.numberOfEpisodes = dataSeries.number_of_episodes;
      this.premiere = dataSeries.first_air_date;
      this.overview = dataSeries.overview;
      this.seasons = dataSeries.seasons;
      this.numberOfSeasons = this.seasons.length;
      this.producers = dataSeries.production_companies;
      this.countryOfOrigin = dataSeries.origin_country;
      this.status = dataSeries.status;
      this.genres = dataSeries.genres;
      this.nextEpisodeDate = dataSeries.next_episode_to_air;
      this.countDownTimer()
    }, error => console.log(error, 'seriesss'),
    () => {
      this.getEpisodesInfo();
      this.loading = false;
    })
  }
}
