import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SerieData } from '../../../shared/models/serieData.model'

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  constructor() { }

  displayTill:boolean = false;
  displayedColumns: string[] = ['position', 'title', 'premiereDate', 'rating', 'id'];

  @Input() dataSourceTable: Array<SerieData>;
  @Input() id: number;
  @Output() showDetails = new EventEmitter<boolean>();

  changeDisplaySeries(id: number): void {
    this.id = id;
    this.displayTill = true;
  }

  showDetailsFlag($event: boolean) {
    if($event === true) {
      this.showDetails.emit(true)
    }
  }


}
