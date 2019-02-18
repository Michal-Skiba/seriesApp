import { Component, OnInit } from '@angular/core';
import { GetLastTrendsService } from '../../../Services/get-last-trends.service'


@Component({
  selector: 'app-last-trends',
  templateUrl: './last-trends.component.html',
  styleUrls: ['./last-trends.component.scss']
})
export class LastTrendsComponent implements OnInit {

  constructor(private getLastTrendsService: GetLastTrendsService) { }

  tableIndex: number = 1;
  dataSourceTable: Array<object> = [];

  ngOnInit() {
    this.getLastTrendsService.getLastTrends(1).subscribe((data) => {
      data.results.forEach(element => {
        let data = {
          'position': this.tableIndex,
          'title': element.name,
          'premiereDate': element.first_air_date,
          'popularity': element.popularity,
          'id': element.id,
        }
        this.dataSourceTable.push(data);
        this.tableIndex++
        console.log(data)
      })
    }, error => console.log(error),
    () => {
      console.log(this.dataSourceTable)
    })
    
  }

}
