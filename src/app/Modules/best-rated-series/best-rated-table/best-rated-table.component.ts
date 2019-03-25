import { Component, Input, DoCheck, OnInit } from '@angular/core';
import { SearchedSerie } from '@models/searchedSerie.model';
import { SeriesService } from '@services/series.service';
import { TabComponent } from '@models/tabComponent.model';

@Component({
  selector: 'app-best-rated-table',
  templateUrl: './best-rated-table.component.html',
  styleUrls: ['./best-rated-table.component.scss']
})
export class BestRatedTableComponent implements OnInit {

  @Input() tab: number;
  // @Input() actualTab: number;
  // @Input() pageNumber: number;
  dataSourceTable: Array<SearchedSerie>
  loading: boolean = true;
  // contentLoad = false;

  constructor(private seriesService: SeriesService) { }

  ngOnInit() {
    const dataSource = localStorage.getItem(String(this.tab))
    if(dataSource) {
      this.dataSourceTable = JSON.parse(dataSource);
      this.loading = false;
    } else {
      this.seriesService.getTopratedSeries(this.tab).subscribe(dataSeries => {
        this.dataSourceTable = dataSeries.results;
        localStorage.setItem(String(this.tab), JSON.stringify(this.dataSourceTable))
      }, () => null,
        () => {
          this.loading = false;
        })
    }
    
  }

  // ngDoCheck() {
  //   if ((!this.contentLoad && this.tab === this.actualTab) ||   (this.tab === 1 && !this.contentLoad)) {
  //     console.log(`loading ${this.tab}`);
  //     this.seriesService.getTopratedSeries(this.tab).subscribe(dataSeries => {
  //       this.dataSourceTable = dataSeries.results;
  //     }, () => null,
  //       () => {
  //         this.loading = false;
  //       })
  //     this.contentLoad = true;
  //   }
  // }

}
