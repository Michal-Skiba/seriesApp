import { Observable, of } from 'rxjs';
import { delay, switchMapTo, concatMap } from 'rxjs/operators';

export class RequestLimiter {
  private timestampCollection: { [t: number]: number; } = {};
  private additionalTimeAfterRefresh = 0;
  private currentUrl = '';
  private requestCounter = 1;
  private timeDifference = 0;

  constructor(private windowTime: number, private maxRequests: number) {}

  public limit(stream: Observable<any>, url: string) {
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

  private waitSecondsCalculate(): number {
    if (this.requestCounter > this.maxRequests && this.requestCounter < this.maxRequests * 2 && this.timeDifference > 0) {
      return this.timeDifference + this.additionalTimeAfterRefresh;
    } else if (this.requestCounter >= this.maxRequests * 2 && this.timeDifference > 0) {
      const additionalTime = Math.floor(this.requestCounter / this.maxRequests) - 1;
      return this.windowTime + additionalTime * this.windowTime + this.additionalTimeAfterRefresh;
    } else {
      return this.additionalTimeAfterRefresh;
    }
  }

  private resetValues(url) {
    if (url !== this.currentUrl) {
      this.timestampCollection = {};
      this.requestCounter = 1;
      this.currentUrl = url;
    }
  }

  private timesDifferenceCalculate(currentTime) {
    this.timeDifference = (this.windowTime - (currentTime -
      +this.timestampCollection[this.requestCounter - this.maxRequests + 1]) * 1000);
  }
}
