import { Observable, of } from 'rxjs';
import { delay, switchMapTo, concatMap } from 'rxjs/operators';
import { environment} from '@environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RequestLimiter {
  timestampCollection: { [t: number]: number; } = {};
  additionalTimeAfterRefresh = 0;
  currentUrl = '';
  requestCounter = 1;
  timeDifference = 0;
  windowTime = environment.requestsTimeLimit;
  maxRequests = environment.requestsLimit;

  limit(stream: Observable<any>, url: string) {
    return of(null).pipe(concatMap(() => {
      const currentTime = new Date().getTime() / 1000;
      const lastReqTime = localStorage.getItem('timeOfLastReq');
      const lastRequestDelay = (this.windowTime - (currentTime -
        +lastReqTime) * 1000);
      this.timestampCollection[this.requestCounter] = currentTime;
      if (this.requestCounter > 10) {
        localStorage.setItem('timeOfLastReq', JSON.stringify(currentTime));
      }
      if (lastRequestDelay > 0 && this.requestCounter < 2) {
        this.additionalTimeAfterRefresh = lastRequestDelay;
      }
      this.timesDifferenceCalculate(currentTime);
      this.resetValues(url);
      this.requestCounter++;
      return of(null).pipe(
        delay(this.waitSecondsCalculate()),
        switchMapTo(stream),
      );
    }));
  }

  waitSecondsCalculate(): number {
    if (this.requestCounter > this.maxRequests && this.requestCounter < this.maxRequests * 2 && this.timeDifference > 0) {
      return this.timeDifference + this.additionalTimeAfterRefresh;
    } else if (this.requestCounter >= this.maxRequests * 2 && this.timeDifference > 0) {
      const additionalTime = Math.floor(this.requestCounter / this.maxRequests) - 1;
      return this.windowTime + additionalTime * this.windowTime + this.additionalTimeAfterRefresh;
    } else {
      return this.additionalTimeAfterRefresh;
    }
  }

  resetValues(url) {
    if (url !== this.currentUrl) {
      this.timestampCollection = {};
      this.requestCounter = 1;
      this.currentUrl = url;
    }
  }

  timesDifferenceCalculate(currentTime) {
    this.timeDifference = (this.windowTime - (currentTime -
      +this.timestampCollection[this.requestCounter - this.maxRequests + 1]) * 1000);
  }

}
