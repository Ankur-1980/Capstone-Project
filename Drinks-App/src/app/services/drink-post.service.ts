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
    console.log('formvalue', formValue);

    const postData = new FormData();
    postData.append('name', formValue.name);
    postData.append('description', formValue.description);
    postData.append('glassware', formValue.glassware);
    postData.append('image', formValue.image);
    postData.append('location', formValue.location);
    postData.append('rating', formValue.rating);

    console.log('postData:', postData);

    // this.router.navigate(['/the-feed']);
  }
}
