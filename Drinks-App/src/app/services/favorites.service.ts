import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  favorites: any[] = [];
  favoritesUpdated = new Subject<any[]>();

  constructor(private http: HttpClient) {}

  addToFavorites(drink) {
    console.log('service', drink);

    this.http
      .post<{ message: string; items: any }>('/api/recipes', drink)
      .subscribe((response) => {
        console.log(response.message);
        this.favorites.push(drink);

        this.favoritesUpdated.next([...this.favorites]);
        // console.log('service', this.favorites);
      });
  }

  userRecipes(recipe) {
    console.log('service', recipe);

    this.http
      .post<{ message: string; items: any }>('/api/recipes/created', recipe)
      .subscribe((response) => {
        console.log(response.message);
        this.favorites.push(recipe);

        this.favoritesUpdated.next([...this.favorites]);
        // console.log('service', this.favorites);
      });
  }

  getFavorites() {
    this.http
      .get<{ message: string; items: any }>('/api/recipes')
      .subscribe((response) => {
        console.log(response.message);
        this.favorites = response.items;
        this.favoritesUpdated.next([...this.favorites]);
      });
  }

  getFavoriteUpdateListener() {
    return this.favoritesUpdated.asObservable();
  }

  removeFromFavorites(drink) {
    // console.log('service', drinkId);
    const parsedId = drink.idDrink;
    this.http
      .delete<{ message: string; items: any }>(`/api/recipes/${parsedId}`)
      .subscribe(() => {
        this.favorites = this.favorites.filter(
          (fav) => fav.id_drink !== parsedId
        );
        this.favoritesUpdated.next([...this.favorites]);
      });
  }

  deleteFromPref(drinkId) {
    this.http
      .delete<{ message: string; items: any }>(`/api/recipes/${drinkId}`)
      .subscribe((response) => {
        console.log(response.message);

        this.favorites = this.favorites.filter(
          (fav) => fav.id_drink !== drinkId
        );
        this.favoritesUpdated.next([...this.favorites]);
      });
  }

  // getFavorites() {
  //   return this.favorites;
  // }

  containsFavorite(drink) {
    return this.favorites.includes(drink);
  }
}
