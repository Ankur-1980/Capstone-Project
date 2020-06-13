import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserRecipesService {
  constructor(private http: HttpClient) {}

  addNewRecipe(formValue) {
    console.log(formValue);

    this.http
      .post<{ message: string }>('/api/recipes', formValue)
      .subscribe((response) => {
        console.log(response.message);
      });
  }

  getRecipes() {
    return this.http.get('/api/recipes');
  }
}
