import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable()
export class ShowSeriesDetailService {

  private showSeriesDetail = false;
  private show = new Subject<boolean>();

  constructor() { }

  showUp(): void {
    this.showSeriesDetail = true;
    this.show.next(this.showSeriesDetail);
  }

  showDown(): void {
    this.showSeriesDetail = false;
    this.show.next(this.showSeriesDetail);
  }

  getShowInfo(): Observable<boolean> {
    return this.show.asObservable();
  }

}

export class ShowSeriesDetalService {
}
