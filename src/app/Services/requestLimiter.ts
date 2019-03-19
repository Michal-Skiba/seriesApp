import { Observable, of } from 'rxjs';
import { delay, switchMapTo, concatMap } from 'rxjs/operators';

export class RequestLimiter {
    readonly timestampCollection: { [t: number]: number; } = {};
    requestCounter = 1;
    constructor(private windowTime: number, private maxRequests: number) {}

    public limit(stream: Observable<any>) {
        return of(null).pipe(concatMap(() => {
            const now = new Date();
            const beginTime = new Date(new Date().setSeconds(new Date(now).getSeconds() - this.windowTime)).getTime() / 1000;
            const currentTime = now.getTime() / 1000;
            this.timestampCollection[currentTime] = this.requestCounter;
            this.requestCounter++;
            const sumOfRequests = this.calc(beginTime, currentTime);
            let waitSeconds = 0;
            const timeDifference = (this.windowTime - (currentTime -
                +this.getTimeFromTimestampCol(this.requestCounter - this.maxRequests)) * 1000);
            if (timeDifference < 0 && sumOfRequests > this.maxRequests) {
                this.requestCounter = 0
                waitSeconds = 0;
            } else if (sumOfRequests > this.maxRequests && timeDifference) {
                waitSeconds = timeDifference;
            }         
            return of(null).pipe(
                delay(waitSeconds),
                switchMapTo(stream),
            );
      
        }));
    }
    private calc(beginTime: number, endTime: number): number {
        let requestCalc = 0;
        Object.keys(this.timestampCollection).forEach(key => {
            if (+key >= beginTime && endTime >= +key) {
                requestCalc++;
            }
        });
        return requestCalc;
    }

    private getTimeFromTimestampCol(numberOfRequest: number) {
        return Object.keys(this.timestampCollection).find(key =>  this.timestampCollection[key] === numberOfRequest);
    }

}