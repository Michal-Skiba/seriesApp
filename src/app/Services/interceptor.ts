import { HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { retry } from 'rxjs/operators';
import { tap, catchError } from 'rxjs/operators';

export class InterceptorService implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): any {
        // console.log('zapytanie wykonane, ', new Date())
        return next.handle(req).pipe(
            tap(evt => {
                if (evt instanceof HttpResponse) {
                    // console.log(evt, 'ttaaap')
                }
            }),
            catchError((err: any) => {
                if ( err.status === 429) {
                    // console.log('44000044lXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                    
                }
                if(err instanceof HttpErrorResponse) {
                  
                }
                return of(err);
            }));
    }
}