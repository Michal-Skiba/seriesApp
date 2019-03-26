import { Injectable } from '@angular/core';
import { AddTabComponent } from '../classes/add-tab/add-tab'
import { BestRatedTableComponent } from '../Modules/best-rated-series/best-rated-table/best-rated-table.component'

@Injectable({
  providedIn: 'root'
})
export class GetTabService {
  getBestRatedComponent() {
    return [
      new AddTabComponent(BestRatedTableComponent, 1),
      new AddTabComponent(BestRatedTableComponent, 2),
      new AddTabComponent(BestRatedTableComponent, 3),
      new AddTabComponent(BestRatedTableComponent, 4),
      new AddTabComponent(BestRatedTableComponent, 5),
    ];
  }
}
