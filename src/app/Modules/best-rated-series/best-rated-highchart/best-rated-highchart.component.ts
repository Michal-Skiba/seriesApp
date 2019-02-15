import { Component, Input, OnChanges } from '@angular/core';
import { GetSeriesService } from '../../../Services/get-series.service';
import * as Highcharts from 'highcharts/highstock';

@Component({
  selector: 'app-best-rated-highchart',
  templateUrl: './best-rated-highchart.component.html',
  styleUrls: ['./best-rated-highchart.component.scss']
})
export class BestRatedHighchartComponent implements OnChanges {

  constructor(private getSeriesService: GetSeriesService) { }

  @Input() id: number;

  ngOnChanges() {
    const episodesCount = [];
    let seasons = [];
    let name = ''
    this.getSeriesService.getSeriesDetail(this.id).subscribe(dataSeries => {
      seasons = dataSeries.seasons;
      name = dataSeries.name;
    }, error => console.log(error),
    () => {
      seasons.forEach((data) => {
        episodesCount.push(data.episode_count)
      })
      this.chartOptions = {
        series: [{
          name: 'Sezon',
          data: episodesCount || 0,
          pointInterval: 1,
        }],
        title: {
          text: `${name}: ilość odcinków w sezonie`
        },
        yAxis: {
          title: {
              text: 'Liczba odcinków'
          }
        },
        tooltip: {
          enabled: false
        },
      };
  
    })
    
    this.loading = false;
  }

  loading: boolean = false;
  chartOptions: object = {
    series: [{
      data: [0]
    }]
  };
  Highcharts = Highcharts;
  
  

}
