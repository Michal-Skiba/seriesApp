import { Component, OnInit } from '@angular/core';
import { GetLastTrendsService } from '../../../Services/get-last-trends.service'
import { TabelRowLastTrends } from '../../../shared/models/tabelRow.model';

@Component({
  selector: 'app-last-trends',
  templateUrl: './last-trends.component.html',
  styleUrls: ['./last-trends.component.scss']
})
export class LastTrendsComponent implements OnInit {

  constructor(private getLastTrendsService: GetLastTrendsService) { }

  tableIndex: number = 1;
  dataSourceTable: Array<TabelRowLastTrends> = [];
  displayedColumns: string[] = ['position', 'title', 'premiereDate', 'popularity'];
  loading: boolean = true;

  ngOnInit() {
    this.getLastTrendsService.getLastTrends(1).subscribe((data) => {
      data.results.forEach(element => {
        let data = {
          'position': this.tableIndex,
          'title': element.name,
          'premiereDate': element.first_air_date,
          'popularity': element.popularity,
        }
        this.dataSourceTable.push(data);
        this.tableIndex++
      })
    }, error => console.log(error),
    () => {
      this.loading = false;
    })
  }

}
