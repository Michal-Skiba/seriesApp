import { Component, OnInit } from '@angular/core';
import { SearchedSerie } from '@models/searchedSerie.model';
import { SeriesService } from '@services/series.service';

@Component({
  selector: 'app-last-trends',
  templateUrl: './last-trends.component.html',
  styleUrls: ['./last-trends.component.scss']
})
export class LastTrendsComponent implements OnInit {

  constructor(private seriesService: SeriesService) { }

  dataSourceTable: Array<SearchedSerie>;
  loading: boolean = true;

  ngOnInit() {
    this.seriesService.getLastTrends(1).subscribe((data) => {
      this.dataSourceTable = data.results;
    }, () => null,
      () => {
        this.loading = false;
      })
  }
}
