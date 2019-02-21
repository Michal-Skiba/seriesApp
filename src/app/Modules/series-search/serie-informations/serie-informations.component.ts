import { Component, OnInit, Input } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { GetSeriesService } from '../../../Services/get-series.service';

export interface nextEpisodData {
  air_date: string;
  name: string;
}

@Component({
  selector: 'app-serie-informations',
  templateUrl: './serie-informations.component.html',
  styleUrls: ['./serie-informations.component.scss']
})
export class SerieInformationsComponent implements OnInit {

  @Input() id: number;

  filmwebLink: string = environment.filmwebLink;
  imdbLink: string = environment.imdbLink;
  loading: boolean = true;
  popularity: string;
  numberOfEpisodes: string;
  numberOfSeasons: number;
  premiere: string;
  overview: string;
  status: string;
  producers: Array<object>;
  countryOfOrigin: Array<string>;
  genres: Array<object>; // ok zmien object
  similarSeries: Array<object>;
  similarSeriesDisplay: Boolean = false;
  nextEpisodeDate: nextEpisodData;
  countDownTime: string;
  seasons: Array<object>;

  constructor(private getSeriesService: GetSeriesService) { }

  ngOnInit() {
    this.getSeriesService.getSimilarSeries(this.id).subscribe(series => {
      this.similarSeries = series.results;
      this.similarSeriesDisplay = true;
    })
    this.getSeriesInfo(this.id)
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
      this.popularity = dataSeries.popularity;
      this.numberOfEpisodes = dataSeries.number_of_episodes;
      this.premiere = dataSeries.first_air_date;
      this.overview = dataSeries.overview;
      this.producers = dataSeries.production_companies;
      this.numberOfSeasons = dataSeries.seasons.slice(1).length;
      this.countryOfOrigin = dataSeries.origin_country;
      this.status = dataSeries.status;
      this.genres = dataSeries.genres;
      this.nextEpisodeDate = dataSeries.next_episode_to_air;
      this.countDownTimer()
    }, error => console.log(error, 'seriesss'),
    () => {
      this.loading = false;
    })
  }

}
