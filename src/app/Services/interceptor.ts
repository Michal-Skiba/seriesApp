import { HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

export class InterceptorService implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): any {
        console.log('zapytanie wykonane, ', new Date())
        console.log(req.url)
        return next.handle(req).pipe(
            tap(evt => {
                if (evt instanceof HttpResponse) {
                    console.log('ttaaap')
                }
            }),
            catchError((err: any) => {
                console.log(err , 'errrrrrrr w catchu')
                if ( err.status === 404) {
                    console.log('44000044l')
                }
                if(err instanceof HttpErrorResponse) {
                  
                }
                return of(err);
            }));
    }
}