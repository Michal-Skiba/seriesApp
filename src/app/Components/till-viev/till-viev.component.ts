import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SearchedSerie } from '@models/searchedSerie.model';

@Component({
  selector: 'app-till-viev',
  templateUrl: './till-viev.component.html',
  styleUrls: ['./till-viev.component.scss']
})
export class TillVievComponent {

  constructor() {}
  
  @Input() dataSource: Array<SearchedSerie>;
  @Output() showDetails = new EventEmitter<boolean>();
  
  showDetailsFlag($event: boolean) {
    if($event === true) {
      this.showDetails.emit(true)
    }
  }
}
