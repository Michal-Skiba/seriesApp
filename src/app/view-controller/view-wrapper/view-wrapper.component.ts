import { Component, Input } from '@angular/core';
import { SearchedSerie } from '@models/searchedSerie.model';

@Component({
  selector: 'app-view-wrapper',
  templateUrl: './view-wrapper.component.html',
  styleUrls: ['./view-wrapper.component.scss']
})
export class ViewWrapperComponent {

  tableView: boolean;

  @Input() dataSourceTable: Array<SearchedSerie>;
}
