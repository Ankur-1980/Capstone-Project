import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PreferencesService {
  homeBar = [
    { home_bar_id: 1, home_bar_info: 'Vodka' },
    { home_bar_id: 2, home_bar_info: 'Gin' },
    { home_bar_id: 3, home_bar_info: 'Whiskey' },
  ];

  constructor(private http: HttpClient) {}

  getHomeBar() {
    return this.http.get('api/preferences/home-bar');
  }

  addHomeBar(formValue) {
    console.log('service', formValue);

    // this.http
    //   .post<{ message: string }>('/api/preferences', formValue)
    //   .subscribe((response) => {
    //     console.log(response.message);
    //   });
  }
}
