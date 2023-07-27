import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { tap } from 'rxjs/operators';

import { environment } from 'src/environments/environment';

@Injectable()
export class HttpInterceptorInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let secureReq: HttpRequest<any> = request;
    console.log(secureReq)

    secureReq = secureReq.clone({
      url: environment.baseUrl + request.url,
      setParams: { observe: 'response' },
    });

    return next.handle(secureReq).pipe(
      tap(
        (response: any) => {
          // 处理响应的数据
          console.log(response)
        },
        (error: any) => {
          // 处理错误的数据
          console.log(error)
          throw error;
        }
      )
    )
  }

}
