import { Component, OnInit } from '@angular/core';
import { FavoritesService } from 'src/app/services/favorites.service';

@Component({
  selector: 'preferences-drinks',
  templateUrl: './preferences-drinks.component.html',
  styleUrls: ['./preferences-drinks.component.css'],
})
export class PreferencesDrinksComponent implements OnInit {
  constructor(private favoriteService: FavoritesService) {}
  favorites = [];
  ngOnInit(): void {
    this.favorites = this.favoriteService.getFavorites();
  }
}
