import { Component, Input } from '@angular/core';
import { SearchedSerie } from '@models/searchedSerie.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss']
})
export class TableViewComponent {
  constructor(private router: Router) { }

  @Input() dataSourceTable: Array<SearchedSerie>;

  displayedColumns: string[] = ['title', 'premiereDate', 'rating', 'id'];

  showInfo(id: number) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    };
    this.router.navigate([`./search/${id}`])
  }
}


