import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SearchedSerie } from '@models/searchedSerie.model';

@Component({
  selector: 'app-till-view',
  templateUrl: './till-view.component.html',
  styleUrls: ['./till-view.component.scss']
})
export class TillViewComponent {

  @Input() dataSource: Array<SearchedSerie>;
  @Output() showDetails = new EventEmitter<boolean>();

  private showDetailsFlag($event: boolean) {
    if ($event === true) {
      this.showDetails.emit(true);
    }
  }
}
