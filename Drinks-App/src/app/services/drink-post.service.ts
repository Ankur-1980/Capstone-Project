import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class DrinkPostService {
  constructor(private http: HttpClient, private router: Router) {}

  getDrinks() {
    return this.http.get('/api/drink-posts');
  }

  postADrink(formValue) {
    console.log('service', formValue);
    this.router.navigate(['/the-feed']);
  }
}
