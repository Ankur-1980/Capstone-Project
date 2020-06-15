import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient, private router: Router) {}

  getUsers(): any {
    return this.http.get('/api/users');
  }

  addNewUser(formValue) {
    this.http
      .post<{ message: string }>('/api/users/register', formValue)
      .subscribe((response) => {
        console.log(response.message);
      });
  }

  login() {
    this.router.navigate(['/register']);
  }
}
