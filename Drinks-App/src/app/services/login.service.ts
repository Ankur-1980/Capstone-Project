import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}
  users = [];

  getUsers(): any {
    return this.http.get('http://localhost:3000/users');
  }

  addNewUser(formValue) {
    this.http
      .post<{ message: string }>('http://localhost:3000/users', formValue)
      .subscribe((response) => {
        console.log(response.message);
      });
  }
}
