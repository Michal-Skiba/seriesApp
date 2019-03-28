import { Component, OnInit } from '@angular/core';
import { SearchedSerie } from '@models/searchedSerie.model';
import { SeriesService } from '@services/series.service';

@Component({
  selector: 'app-last-trends',
  templateUrl: './last-trends.component.html',
  styleUrls: ['./last-trends.component.scss']
})
export class LastTrendsComponent implements OnInit {

  constructor(private seriesService: SeriesService) {}

  dataSourceTable: Array<SearchedSerie>;
  loading = true;

  ngOnInit() {
    const dataSource = sessionStorage.getItem(String('lastTrends'));
    if (!dataSource) {
      this.loadData();
    } else {
      this.dataSourceTable = JSON.parse(dataSource);
      this.loading = false;
    }
  }
  loadData(): void {
    this.seriesService.getLastTrends(1).subscribe((data) => {
        sessionStorage.setItem('lastTrends', JSON.stringify(data.results));
        this.dataSourceTable = data.results;
      }, () => null,
      () => {
        this.loading = false;
      });
  }
}
