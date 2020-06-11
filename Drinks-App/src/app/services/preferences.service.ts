import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PreferencesService {
  constructor(private http: HttpClient) {}

  getHomeBar() {
    return this.http.get('/api/preferences/home-bar');
  }

  addHomeBar(formValue) {
    this.http
      .post<{ message: string }>('/api/preferences/home-bar', formValue)
      .subscribe((response) => {
        console.log(response.message);
      });
  }
}
