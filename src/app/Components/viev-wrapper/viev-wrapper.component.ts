import { Component, Input } from '@angular/core';
import { SearchedSerie } from '@models/searchedSerie.model';

@Component({
  selector: 'app-viev-wrapper',
  templateUrl: './viev-wrapper.component.html',
  styleUrls: ['./viev-wrapper.component.scss']
})
export class VievWrapperComponent {

  constructor() { }
  tableViev: boolean;

  @Input() dataSourceTable: Array<SearchedSerie>;

}
