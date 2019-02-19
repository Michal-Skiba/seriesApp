import { Component, OnInit, Input } from '@angular/core';
import { GetTopRatedSeriesService } from '../../../Services/get-top-rated-series.service';
import { tabelRowBestRated } from '../../../shared/models/tabelRow.model';

@Component({
  selector: 'app-best-rated-table',
  templateUrl: './best-rated-table.component.html',
  styleUrls: ['./best-rated-table.component.scss']
})
export class BestRatedTableComponent implements OnInit {

  constructor(private getTopRatedService: GetTopRatedSeriesService) {}

  ngOnInit() {
    const dataSourceArr = [];
    let position = this.tablePositonCalculate();
    this.getTopRatedService.getTopratedSeries(this.tab).subscribe(dataSeries => {
      dataSeries.results.forEach(element => {
        let data = {
          'position': position,
          'name': element.name,
          'vote_average': element.vote_average,
          'vote_count': element.vote_count,
          'id': element.id,
        }
        dataSourceArr.push(data);
        position++
      })
    }, error => console.log(error),
    () => {
      this.loading = false;
      this.dataSourceTable = dataSourceArr;
    }) 
  }
  @Input() tab: number;

  actualId: number;
  dataSourceTable: Array<tabelRowBestRated>
  displayedColumns: string[] = ['position', 'name', 'vote_average', 'vote_count', 'id'];
  loading: boolean = true;
  displayChartComponent: boolean = false;


  displayChart(id: number) {
    this.displayChartComponent = true;
    this.actualId = id;
  }


  tablePositonCalculate(): number {
    if(this.tab === 1) {
      return 1;
    } else if (this.tab === 2) {
      return 21;
    } else if (this.tab === 3) {
      return 41;
    } else if (this.tab === 4) {
      return 61;
    } else if (this.tab === 5) {
      return 81;
    }
  }

}
