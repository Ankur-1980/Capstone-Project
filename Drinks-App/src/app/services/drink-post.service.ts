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
    this.http.post('/api/drink-posts', formValue);
    console.log('service', formValue);

    // const postData = new FormData();
    // postData.append('title')
    // this.router.navigate(['/the-feed']);
  }
}
