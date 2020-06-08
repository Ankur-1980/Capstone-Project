import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}
  users = [];
  getUsers(): any {
    this.http
      .get<{ message: string; users }>('http://localhost:3000/users')
      .subscribe((response) => {
        console.log(response.users);
      });
  }

  addNewUser(formValue) {
    this.http
      .post<{ message: string }>('http://localhost:3000/users', formValue)
      .subscribe((response) => {
        console.log(response.message);
      });
  }
}
