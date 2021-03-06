import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { of } from 'rxjs';
import {  catchError } from 'rxjs/operators';

export class InterceptorService implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): any {
        return next.handle(req).pipe(
            // tap(evt => {
            //     if (evt instanceof HttpResponse) {
            //         console.log(evt)
            //     }
            // }),
            catchError((err: any) => {
                return of(err);
            }));
    }
}
