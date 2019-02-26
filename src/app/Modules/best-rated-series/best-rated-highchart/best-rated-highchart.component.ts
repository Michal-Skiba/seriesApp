import { Component, Inject } from '@angular/core';
import { GetSeriesService } from '../../../Services/get-series.service';
import * as Highcharts from 'highcharts/highstock';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-best-rated-highchart',
  templateUrl: './best-rated-highchart.component.html',
  styleUrls: ['./best-rated-highchart.component.scss']
})
export class BestRatedHighchartComponent {

  loading: boolean = true;
  chartOptions: object = {};
  PieChartOptions: object = {}
  Highcharts = Highcharts;

  constructor(
    private getSeriesService: GetSeriesService,
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: number,
    ) {
      const episodesCount = [];
      let name = ''
      let voteAverage = 0
      let voteToTen = 0;
      this.getSeriesService.getSeriesDetail(this.data).subscribe(dataSeries => {
        voteAverage = dataSeries.vote_average;
        voteToTen  = parseFloat((10 - voteAverage).toFixed(2));
        name = dataSeries.name;
        dataSeries.seasons.forEach((data) => {
          episodesCount.push(data.episode_count)
        })
        this.chartOptions = {
          series: [{
            name: 'Sezon',
            data: episodesCount || 0,
            pointInterval: 1,
          }],
          title: {
            text: `${name}: ilość odcinków w sezonie`,
          },
          yAxis: {
            title: {
                text: 'Liczba odcinków',
            }
          },
          tooltip: {
            enabled: false,
          },
        };
        this.PieChartOptions = {      
          chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie',
          },
          dataLabels: {
            enabled: true,
          },
          title: {
              text: 'Ocena filmu',
          },
          series: [{
              colorByPoint: true,
              data: [{
                  name: 'Średnia ocena',
                  y: voteAverage,
                },
                {
                  name: '',
                  y: voteToTen,
                  color: 'red',
                },
            
              ]
          }]
        }
      }, error => console.log(error),
      () => {
        this.loading = false;
      }) 
    }

}
