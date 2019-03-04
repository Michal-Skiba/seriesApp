import { Component, OnInit } from '@angular/core';

const Test: boolean = true
const { Observable } = require('rxjs/Observable');
require('rxjs/add/observable/of');

@Component({
  selector: 'app-mock-get-show-info',
  templateUrl: './mock-get-show-info.component.html',
  styleUrls: ['./mock-get-show-info.component.scss']
})
export class MockGetShowInfoComponent implements OnInit {

  constructor() { }

  public getShowInfo(): any {
    return Observable.of(Test)
  }
  

  // isSerieDetailThere: boolean;
  // showPremiere: boolean;

  ngOnInit() {
    // this.showSeriesDetalService.getShowInfo().subscribe((data: boolean) => { 
    //   this.isSerieDetailThere = data;
    //   setTimeout(()=> {
    //     if(data) {
    //       this.showPremiere = false;
    //     }
    //   }, 0);
    // })
  }

}
