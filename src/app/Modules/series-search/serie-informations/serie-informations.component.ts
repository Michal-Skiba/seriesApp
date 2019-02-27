import { Component, OnInit, Input } from '@angular/core';
import { environment } from '@environments/environment';
import { GetSeriesService } from '@services/get-series.service';
import { SearchedSerie } from '@models/searchedSerie.model';
import { SerieDetail } from '@models/serieDetail.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-serie-informations',
  templateUrl: './serie-informations.component.html',
  styleUrls: ['./serie-informations.component.scss']
})
export class SerieInformationsComponent implements OnInit {

  @Input() id: number;

  loading: boolean = true;
  filmwebLink: string = environment.filmwebLink;
  imdbLink: string = environment.imdbLink;
  similarSeries: Array<SearchedSerie>;
  countDownTime: string;
  serieInformations: SerieDetail;
  similarSeries$: Observable<any>;
  serieInformation$: Observable<SerieDetail>
  

  constructor(private getSeriesService: GetSeriesService) { 
    
  }
  
  ngOnInit() {
    this.similarSeries$ = this.getSeriesService.getSimilarSeries(this.id);
    this.getSeriesService.getSimilarSeries(this.id).subscribe(series => {
      this.similarSeries = series.results;
      console.log(series, 'testtt')
    })
    this.getSeriesInfo(this.id)
  }

  countDownTimer(): void | string {
    if(this.serieInformations.next_episode_to_air) {
      const countDownDate = new Date(this.serieInformations.next_episode_to_air.air_date + " " + " 10:00:00").getTime();
      setInterval(() => {
        const now = new Date().getTime();
        console.log(now, 'now')
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
