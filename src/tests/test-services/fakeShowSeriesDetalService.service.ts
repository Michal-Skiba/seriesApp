import { Observable } from 'rxjs';

export class FakeShowSeriesDetalService {

  constructor() { }

  getShowInfo(): Observable<boolean> {
    return Observable.of(true);
  }
}
