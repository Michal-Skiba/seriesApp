import { Component, OnInit } from '@angular/core';
import { GetTopRatedSeriesService } from '../../Services/get-top-rated-series.service';
import { SearchedSerie } from 'src/app/shared/models/searchedSerie.model';

@Component({
  selector: 'app-top-rated-serie',
  templateUrl: './top-rated-serie.component.html',
  styleUrls: ['./top-rated-serie.component.scss']
})
export class TopRatedSerieComponent implements OnInit {

  constructor(private getTopRatedService: GetTopRatedSeriesService) { }

  ngOnInit() {
    this.getTopRatedService.getTopratedSeries(1).subscribe(dataSeries => {
      this.bestRatedSerie = dataSeries.results[0];
    }, error => console.log(error),
    () => {
      this.loading = false;
    })
  }
  
  loading: boolean = true;
  bestRatedSerie: SearchedSerie; 
}
