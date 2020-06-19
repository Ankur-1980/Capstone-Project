import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { extractError } from '../helpers/functions';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  register(formData): Observable<any> {
    return this.http
      .post('/api/users/register', formData)
      .pipe(
        catchError((resError: HttpErrorResponse) =>
          throwError(extractError(resError))
        )
      );
  }

  login(formData: any) {
    return this.http
      .post('/api/users/login', formData)
      .pipe(
        catchError((resError: HttpErrorResponse) =>
          throwError(extractError(resError))
        )
      );
  }
}
