import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SerieData } from '../../../shared/models/serieData.model'

@Component({
  selector: 'app-till-viev',
  templateUrl: './till-viev.component.html',
  styleUrls: ['./till-viev.component.scss']
})
export class TillVievComponent {

  constructor() {}
  @Input() dataSource: Array<SerieData>;
  @Output() showDetails = new EventEmitter<boolean>();
  
  showDetailsFlag($event: boolean) {
    if($event === true) {
      this.showDetails.emit(true)
    }
  }


}
