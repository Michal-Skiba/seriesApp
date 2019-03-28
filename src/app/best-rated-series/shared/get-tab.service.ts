import { Injectable } from '@angular/core';
import { TabClass} from './tabClass/tabClass';
import { BestRatedTableComponent } from '../best-rated-table/best-rated-table.component';

@Injectable({
  providedIn: 'root'
})
export class GetTabService {
  getBestRatedComponent() {
    return [
      new TabClass(BestRatedTableComponent, 1),
      new TabClass(BestRatedTableComponent, 2),
      new TabClass(BestRatedTableComponent, 3),
      new TabClass(BestRatedTableComponent, 4),
      new TabClass(BestRatedTableComponent, 5),
    ];
  }
}
