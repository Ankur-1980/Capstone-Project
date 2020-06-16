import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  favorites = [];

  constructor() {}

  addToFavorites(drink) {
    this.favorites.push(drink);
    return this.favorites;
  }

  removeFromFavorites(drink) {
    let index = this.favorites.findIndex(
      (fav) => fav.idDrink === drink.idDrink
    );
    this.favorites.splice(index, 1);
    return this.favorites;
  }

  getFavorites() {
    return this.favorites;
  }

  containsFavorite(drink) {
    return this.favorites.includes(drink);
  }
}
