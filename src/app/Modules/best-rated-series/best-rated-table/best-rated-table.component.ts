import { Component, OnInit, Input } from '@angular/core';
import { GetTopRatedSeriesService } from '../../../Services/get-top-rated-series.service';
import { TabelRowBestRated } from '../../../shared/models/tabelRow.model';
import { MatDialog } from '@angular/material';
import { BestRatedHighchartComponent } from '../best-rated-highchart/best-rated-highchart.component'
import { ChangeLanguageService } from '../../../Services/change-language.service';

@Component({
  selector: 'app-best-rated-table',
  templateUrl: './best-rated-table.component.html',
  styleUrls: ['./best-rated-table.component.scss']
})
export class BestRatedTableComponent implements OnInit {

  @Input() tab: number;

  actualId: number;
  dataSourceTable: Array<TabelRowBestRated>
  displayedColumns: string[] = ['position', 'name', 'vote_average', 'vote_count', 'id'];
  loading: boolean = true;
  displayChartComponent: boolean = false;
  language: string;

  constructor(
    private getTopRatedService: GetTopRatedSeriesService,
    public dialog: MatDialog,
    private changeLanguageService: ChangeLanguageService,
  ) {}

  ngOnInit() {
    this.language = this.changeLanguageService.getInfoLanguage()
    const dataSourceArr = [];
    let position = this.tablePositonCalculate();
    this.getTopRatedService.getTopratedSeries(this.tab).subscribe(dataSeries => {
      dataSeries.results.forEach(element => {    
        let dataTable = {
          'position': position,
          'name': element.name,
          'vote_average': element.vote_average,
          'vote_count': element.vote_count,
          'original_name': element.original_name,
          'id': element.id,
        }
        dataSourceArr.push(dataTable);
        position++      
      })
    }, error => console.log(error),
    () => {
      this.loading = false;
      this.dataSourceTable = dataSourceArr;
    }) 
  }
  

  displayChart(id: number): void {
    this.displayChartComponent = true;
    this.actualId = id;
    this.dialog.open(BestRatedHighchartComponent, {
      width: '90%',
      data: id,
    });
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
