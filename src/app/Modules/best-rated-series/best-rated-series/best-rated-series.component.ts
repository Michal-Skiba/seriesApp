import { Component } from '@angular/core';
import { TabEvent } from '@models/tabEvent.model.ts';

@Component({
  selector: 'app-best-rated-series',
  templateUrl: './best-rated-series.component.html',
  styleUrls: ['./best-rated-series.component.scss']
})
export class BestRatedSeriesComponent {

  constructor() { }

  actualTab: number;

  tabClick($tab: TabEvent) {
    this.actualTab = $tab.index + 1;
  }
  
}
