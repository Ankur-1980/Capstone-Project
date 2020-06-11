import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PreferencesService {
  preferencesItems = [];
  constructor(private http: HttpClient) {}

  getItems() {
    return this.http.get('/api/preferences');
  }

  addItems(formValue) {
    // console.log('service', formValue);
    this.preferencesItems.push(formValue);

    this.http
      .post<{ message: string }>('/api/preferences', formValue)
      .subscribe((response) => {
        console.log(response.message);
      });
  }
}
