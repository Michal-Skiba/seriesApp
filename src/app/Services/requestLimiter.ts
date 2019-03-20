import { Observable, of } from 'rxjs';
import { delay, switchMapTo, concatMap } from 'rxjs/operators';

export class RequestLimiter {
    timestampCollection: { [t: number]: number; } = {};
    constructor(private windowTime: number, private maxRequests: number) {}

    public limit(stream: Observable<any>) {
        return of(null).pipe(concatMap(() => {
            const now = new Date();
            const beginTime = new Date(new Date().setSeconds(new Date(now).getSeconds() - this.windowTime)).getTime() / 1000;
            const currentTime = now.getTime() / 1000;
            
            const sumOfRequests = this.calc(beginTime, currentTime);
            this.timestampCollection[currentTime] = sumOfRequests;
            let waitSeconds = 0;
            const timeDifference = (this.windowTime - (currentTime -
                +this.getTimeFromTimestampCol(sumOfRequests - this.maxRequests)) * 1000);
            console.log(sumOfRequests, 'sumaaaaaaaaaa')
            if (timeDifference < 0) {
                this.timestampCollection = {};
                waitSeconds = 0;
            } else if (sumOfRequests > this.maxRequests && sumOfRequests < this.maxRequests*2 && timeDifference) {
                waitSeconds = timeDifference;
            } else if (sumOfRequests >= this.maxRequests*2) {
                let additionalTime = Math.floor(sumOfRequests/this.maxRequests) -1
                waitSeconds = timeDifference + additionalTime * this.windowTime;
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