import { Component, OnInit, Input } from '@angular/core';
import { SearchedSerie } from '@models/searchedSerie.model';
import { SeriesService } from '@services/series.service';

@Component({
  selector: 'app-best-rated-table',
  templateUrl: './best-rated-table.component.html',
  styleUrls: ['./best-rated-table.component.scss']
})
export class BestRatedTableComponent implements OnInit {

  @Input() tab: number;

  dataSourceTable: Array<SearchedSerie>
  loading: boolean = true;

  constructor(private seriesService: SeriesService) {}

  ngOnInit() {
    this.seriesService.getTopratedSeries(this.tab).subscribe(dataSeries => {
      this.dataSourceTable = dataSeries.results;
    }, () => null,
    () => {
      this.loading = false;
    }) 
  }

}
