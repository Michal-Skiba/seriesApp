import { Component, OnInit, Input } from '@angular/core';
import { TopRatedSeriesService } from '@services/top-rated-series.service';
import { SearchedSerie } from '@models/searchedSerie.model';

@Component({
  selector: 'app-best-rated-table',
  templateUrl: './best-rated-table.component.html',
  styleUrls: ['./best-rated-table.component.scss']
})
export class BestRatedTableComponent implements OnInit {

  @Input() tab: number;

  dataSourceTable: Array<SearchedSerie>
  loading: boolean = true;

  constructor(private getTopRatedService: TopRatedSeriesService) {}

  ngOnInit() {
    this.getTopRatedService.getTopratedSeries(this.tab).subscribe(dataSeries => {
      this.dataSourceTable = dataSeries.results
    }, () => null,
    () => {
      this.loading = false;
    }) 
  }

}
