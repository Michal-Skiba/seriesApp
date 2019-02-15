import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShowSeriesDetalService {

  private showSeriesDetail: boolean = false;
  private show = new Subject<boolean>();

  constructor() {}

  showUp(): void {
    console.log('showup')
    this.showSeriesDetail = true;
    this.show.next(this.showSeriesDetail);
  }

  showDown(): void {
    console.log('showdown')
    this.showSeriesDetail = false;
    this.show.next(this.showSeriesDetail);
  }

  getShowInfo(): Observable<boolean> {
    return this.show.asObservable();
  }

}
