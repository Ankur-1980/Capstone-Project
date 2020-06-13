import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  getUsers(): any {
    return this.http.get('/api/users');
  }

  addNewUser(formValue) {
    this.http
      .post<{ message: string }>('/api/users', formValue)
      .subscribe((response) => {
        console.log(response.message);
      });
  }
}
