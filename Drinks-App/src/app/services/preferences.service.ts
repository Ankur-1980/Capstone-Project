import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PreferencesService {
  homeBarItems = [];
  constructor(private http: HttpClient) {}

  getHomeBar() {
    // this takes everything already in the array and adds to it.
    // return [...this.homeBarItems];
    return this.http.get('/api/preferences/home-bar');
  }

  addHomeBar(formValue) {
    // console.log('service', formValue);
    this.homeBarItems.push(formValue);

    this.http
      .post<{ message: string }>('/api/preferences/home-bar', formValue)
      .subscribe((response) => {
        console.log(response.message);
      });
  }
}
