import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServService } from './Services/serv.service';

@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {
  constructor(private service: ServService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    console.log(this.service.accessToken);
    if (
      request.url.includes('/Student') ||
      request.url.includes('/prof') ||
      request.url.includes('/admin') ||
      request.url.includes('/api')
    ) {
      console.log(this.service.accessToken);

      let newRequest = request.clone({
        headers: request.headers.set(
          'Authorization',
          'Bearer ' + this.service.accessToken
        ),
      });
      console.log(newRequest);
      return next.handle(newRequest);
    } else {
      console.log(request);
      return next.handle(request);
    }
  }
}
