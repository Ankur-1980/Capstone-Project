import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  favorites = [];
  favoritesUpdated = new Subject();

  constructor(private http: HttpClient) {}

  addToFavorites(drink) {
    this.http
      .post<{ message: string; items: any }>('/api/recipes', drink)
      .subscribe((response) => {
        console.log(response.message);
        this.favorites.push(drink);
        // console.log('service', response.items);
        this.favoritesUpdated.next([...this.favorites]);
        console.log('service', this.favorites);
      });
    // this.favorites.push(drink);
    // return this.favorites;
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

  removeFromFavorites(drinkId) {
    console.log('service', drinkId);
    this.http
      .delete<{ message: string; items: any }>(`/api/recipes/${drinkId}`)
      .subscribe(() => {
        let index = this.favorites.findIndex(
          (items) => items.idDrink === drinkId
        );
        this.favorites.splice(index, 1);
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
