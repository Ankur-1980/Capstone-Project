import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DrinksApiService {
  baseUrl = 'https://www.thecocktaildb.com/api/json/v2/9973533/';

  constructor(private http: HttpClient) {}

  getCategories() {
    return this.http.get(`${this.baseUrl}list.php?c=list`);
  }

  getGlassware() {
    return this.http.get(`${this.baseUrl}list.php?g=list`);
  }

  getIngredients() {
    return this.http.get(`${this.baseUrl}list.php?i=list`);
  }

  getAlcoholic() {
    return this.http.get(`${this.baseUrl}list.php?a=list`);
  }

  getLetterA() {
    return this.http.get(`${this.baseUrl}search.php?f=a`);
  }
}
