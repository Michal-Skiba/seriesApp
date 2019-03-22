import { Observable, of } from 'rxjs';
import { delay, switchMapTo, concatMap } from 'rxjs/operators';

export class RequestLimiter {
    timestampCollection: { [t: number]: number; } = {};
    additionalTimeAfterRefresh: number = 0;
    currentUrl: string = ''
    requestCounter = 1;
    constructor(private windowTime: number, private maxRequests: number) {}

    public limit(stream: Observable<any>, url: string) {
        return of(null).pipe(concatMap(() => {       
            const currentTime = new Date().getTime() / 1000;
            const lastReqTime = localStorage.getItem('timeOflastReq');
            this.timestampCollection[this.requestCounter] = currentTime;
            const lastRequestDelay = (this.windowTime - (currentTime -
                +lastReqTime) * 1000);
            if (this.requestCounter > 10 ) {
                localStorage.setItem('timeOflastReq', JSON.stringify(currentTime))   
            }            
            if (lastRequestDelay > 0 && this.requestCounter === 1) {
                this.additionalTimeAfterRefresh = lastRequestDelay;
            }
            let waitSeconds = 0 + this.additionalTimeAfterRefresh;
            const timeDifference = (this.windowTime - (currentTime -
                +this.timestampCollection[this.requestCounter - this.maxRequests+1]) * 1000);
            if(url != this.currentUrl) {
                this.timestampCollection = {};
                this.requestCounter  = 1;
                this.currentUrl = url;
            }
            if (this.requestCounter > this.maxRequests && this.requestCounter < this.maxRequests*2 && timeDifference > 0) {
                waitSeconds = timeDifference + this.additionalTimeAfterRefresh;
            } else if (this.requestCounter >= this.maxRequests*2 && timeDifference > 0) {
                let additionalTime = Math.floor(this.requestCounter/this.maxRequests) - 1;
                waitSeconds = this.windowTime + additionalTime * this.windowTime + this.additionalTimeAfterRefresh;
            } 
            this.requestCounter++
            return of(null).pipe(
                delay(waitSeconds),
                switchMapTo(stream),
            );
      
        }));
    }
}