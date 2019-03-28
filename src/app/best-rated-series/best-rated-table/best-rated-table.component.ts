import { Component, Input, OnInit } from '@angular/core';
import { SearchedSerie } from '@models/searchedSerie.model';
import { SeriesService } from '@services/series.service';

@Component({
  selector: 'app-best-rated-table',
  templateUrl: './best-rated-table.component.html',
  styleUrls: ['./best-rated-table.component.scss']
})
export class BestRatedTableComponent implements OnInit {

  @Input() tab: number;
  dataSourceTable: Array<SearchedSerie> = [];
  loading = true;

  constructor(private seriesService: SeriesService) { }

  ngOnInit() {
    const dataSource = sessionStorage.getItem(String(this.tab));
    if (dataSource) {
      this.dataSourceTable = JSON.parse(dataSource);
      this.loading = false;
    } else {
      this.fetchTopRatedSeries();
    }
  }

  private fetchTopRatedSeries(): void {
    this.seriesService.getTopratedSeries(this.tab).subscribe(dataSeries => {
        this.dataSourceTable = dataSeries.results;
        sessionStorage.setItem(String(this.tab), JSON.stringify(this.dataSourceTable));
      }, () => null,
      () => {
        this.loading = false;
      });
  }
}
