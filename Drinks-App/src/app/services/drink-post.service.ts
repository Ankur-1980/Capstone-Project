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

  postADrink({ name, description, glassware, image, location, rating }) {
    // this.http.post('/api/drink-posts', formValue);

    // console.log(formValue);
    // console.log(description);

    const postData = new FormData();
    postData.append('name', name);
    // postData.append('description', formValue.description);
    // postData.append('glassware', formValue.glassware);
    // postData.append('image', formValue.image);
    // postData.append('location', formValue.location);
    // postData.append('rating', formValue.rating);

    console.log('postData:', postData);

    // this.router.navigate(['/the-feed']);
  }
}
