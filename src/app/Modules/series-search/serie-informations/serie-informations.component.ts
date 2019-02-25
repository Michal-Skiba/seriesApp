import { Component, OnInit, Input } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { GetSeriesService } from '../../../Services/get-series.service';
import { SearchedSerie } from 'src/app/shared/models/searchedSerie.model';
import { NextEpisode } from 'src/app/shared/models/nextEpisode.model';
import { SerieDetail } from 'src/app/shared/models/serieDetail.model';

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
  similarSeries: Array<SearchedSerie>;
  similarSeriesDisplay: Boolean = false;
  countDownTime: string;
  serieInformations: SerieDetail;

  constructor(private getSeriesService: GetSeriesService) { }

  ngOnInit() {
    this.getSeriesService.getSimilarSeries(this.id).subscribe(series => {
      this.similarSeries = series.results;
      this.similarSeriesDisplay = true;
    })
    this.getSeriesInfo(this.id)
  }

  countDownTimer(): void | string {
    if(this.serieInformations.next_episode_to_air) {
      const countDownDate = new Date(this.serieInformations.next_episode_to_air.air_date + " " + " 10:00:00").getTime();
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
      this.serieInformations.next_episode_to_air.air_date;
    } else {
      return 'Brak danych'
    }
  }
  
  getSeriesInfo(id: number): void {
    this.getSeriesService.getSeriesDetail(id).subscribe(dataSeries => {
      this.serieInformations = new SerieDetail(dataSeries)
      this.countDownTimer()
    }, error => console.log(error, 'seriesss'),
    () => {
      this.loading = false;
    })
  }

}
