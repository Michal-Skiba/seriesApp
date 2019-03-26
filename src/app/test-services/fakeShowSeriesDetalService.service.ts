import { Observable } from 'rxjs';
import 'rxjs/Rx';

export class FakeShowSeriesDetalService {

  constructor() { }

  getShowInfo(): Observable<boolean> {
    return Observable.of(true);
  }
}
