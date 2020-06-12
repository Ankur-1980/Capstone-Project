import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RecipeApiService {
  baseUrl = 'https://www.thecocktaildb.com/api/json/v2/9973533/';

  constructor(private http: HttpClient) {}

  // list the categories
  getCategories() {
    return this.http.get(`${this.baseUrl}list.php?c=list`);
  }

  // glassware
  getGlassware() {
    return this.http.get(`${this.baseUrl}list.php?g=list`);
  }

  getAlcoholic() {
    return this.http.get(`${this.baseUrl}list.php?a=list`);
  }
  getLetterA() {
    return this.http.get(`${this.baseUrl}search.php?f=a`);
  }

  getLetter(letter) {
    return this.http.get(`${this.baseUrl}search.php?f=${letter}`);
  }

  getIngredients() {
    return this.http.get(`${this.baseUrl}list.php?i=list`);
  }

  getDetails(recipeID) {
    console.log('service', recipeID);

    return this.http.get(`${this.baseUrl}lookup.php?i=${recipeID}`);
  }

  filterNA(something) {
    return this.http.get(`${this.baseUrl}filter.php?a=Alcoholic`);
  }

  filterCocktailType() {
    return this.http.get(`${this.baseUrl}filter.php?g=Cocktail_glass`);
  }

  searchByName(name) {
    return this.http.get(`${this.baseUrl}search.php?s=${name.searchName}`);
  }

  searchByLetter(letter) {
    // console.log(letter);
    return this.http.get(`${this.baseUrl}search.php?f=${letter.letter}`);
  }
}
