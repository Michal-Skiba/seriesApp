import { Component, OnInit } from '@angular/core';
import { LastTrendsService } from '@services/last-trends.service'
import { SearchedSerie } from '@models/searchedSerie.model';

@Component({
  selector: 'app-last-trends',
  templateUrl: './last-trends.component.html',
  styleUrls: ['./last-trends.component.scss']
})
export class LastTrendsComponent implements OnInit {

  constructor(private lastTrendsService: LastTrendsService) { }

  dataSourceTable: Array<SearchedSerie>
  loading: boolean = true;

  ngOnInit() {
    this.lastTrendsService.getLastTrends(1).subscribe((data) => {
      this.dataSourceTable = data.results
    }, () => null,
    () => {
      this.loading = false;
    })
  }

}
