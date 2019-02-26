import { Component, OnInit } from '@angular/core';
import { GetLatestSerieService } from '../../Services/get-latest-serie.service';

@Component({
  selector: 'app-latest-series',
  templateUrl: './latest-series.component.html',
  styleUrls: ['./latest-series.component.scss']
})
export class LatestSeriesComponent implements OnInit {

  loading: boolean = true;
  latestSerieName: string;
  nextAirDate: string;
  countDownTime: string = 'brak danych';

  constructor(private getLatestSeriesService: GetLatestSerieService) { }

  ngOnInit() {
    this.getLatestSeriesService.getLatestSerie().subscribe(dataSeries => {
      this.latestSerieName = dataSeries.name;
      if(dataSeries.next_episode_to_air) {
        this.nextAirDate = dataSeries.next_episode_to_air.air_date
      }
      this.countDownTimer();
    }, error => console.log(error),
    () => {
      this.loading = false;
    })
  }

  countDownTimer() {
    if(this.nextAirDate) {
      const countDownDate = new Date(this.nextAirDate + " " + " 10:00:00").getTime();
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
    }
  }
}
