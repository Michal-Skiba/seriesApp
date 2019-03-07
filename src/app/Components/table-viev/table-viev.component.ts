import { Component, OnInit, Input } from '@angular/core';
import { SearchedSerie } from '@models/searchedSerie.model';
import { Router } from '@angular/router'

@Component({
  selector: 'app-table-viev',
  templateUrl: './table-viev.component.html',
  styleUrls: ['./table-viev.component.scss']
})
export class TableVievComponent implements OnInit {
  constructor(private router: Router) { }

  @Input() dataSourceTable: Array<SearchedSerie>;
  @Input() searchViev: boolean;
  displayedColumns: string[] = [ 'title', 'premiereDate', 'rating', 'id'];

  showInfo(id: number) {
     this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    };
    this.router.navigate([`./search/${id}`])
  }
  
  ngOnInit() {
    console.log(this.dataSourceTable, 'w komponencie ')
  }
}


