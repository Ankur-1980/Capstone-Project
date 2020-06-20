import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { extractError } from '../helpers/functions';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Login } from '../interfaces/login';

const jwt = new JwtHelperService();

class DecodedToken {
  exp: number = 0;
  username: string = '';
  userId: string = '';
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private decodedToken: DecodedToken;

  constructor(private http: HttpClient) {
    this.decodedToken = new DecodedToken();
  }

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
    return this.http.post('/api/users/login', formData).pipe(
      map((data: Login) => {
        const savedToken = this.saveToken(data.token);
        if (!savedToken) {
          console.log('ERROR');
          return null;
        }

        return data.token;
      }),
      catchError((resError: HttpErrorResponse) =>
        throwError(extractError(resError))
      )
    );
  }

  private saveToken(token: string) {
    const decodedToken = jwt.decodeToken(token);
    if (!decodedToken) {
      return null;
    }

    this.decodedToken = decodedToken;
    localStorage.setItem('topShelf', token);
    return token;
  }
}
