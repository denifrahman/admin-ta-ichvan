import { Inject, Injectable, Optional } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { TokenService } from '../authentication/token.service';
import { BASE_URL } from './base-url-interceptor';
import { SettingsService } from '@core';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private token: TokenService,
    private settings: SettingsService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.token.get().accessToken,
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'no-cache',
    });
    const clone = req.clone({
      headers: headers,
    });
    return next.handle(clone);
  }

}
