import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DrinkPostService {
  constructor(private http: HttpClient) {}

  getDrinks() {
    return this.http.get('/api/drink-posts');
  }
}
