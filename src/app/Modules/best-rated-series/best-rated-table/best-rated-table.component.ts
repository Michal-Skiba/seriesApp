import { Component, Input, DoCheck } from '@angular/core';
import { SearchedSerie } from '@models/searchedSerie.model';
import { SeriesService } from '@services/series.service';

@Component({
  selector: 'app-best-rated-table',
  templateUrl: './best-rated-table.component.html',
  styleUrls: ['./best-rated-table.component.scss']
})
export class BestRatedTableComponent implements DoCheck {

  @Input() tab: number;
  @Input() actualTab: number;

  dataSourceTable: Array<SearchedSerie>
  loading: boolean = true;
  contentLoad = false;

  constructor(private seriesService: SeriesService) { }

  ngDoCheck() {
    if ((!this.contentLoad && this.tab === this.actualTab) ||   (this.tab === 1 && !this.contentLoad)) {
      console.log(`loading ${this.tab}`);
      this.seriesService.getTopratedSeries(this.tab).subscribe(dataSeries => {
        this.dataSourceTable = dataSeries.results;
      }, () => null,
        () => {
          this.loading = false;
        })
      this.contentLoad = true;
    }
  }

}
