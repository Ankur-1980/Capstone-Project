import { Component, OnInit } from '@angular/core';
import { FavoritesService } from 'src/app/services/favorites.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'preferences-drinks',
  templateUrl: './preferences-drinks.component.html',
  styleUrls: ['./preferences-drinks.component.css'],
})
export class PreferencesDrinksComponent implements OnInit {
  favorites = [];
  favSub: Subscription;
  constructor(private favoriteService: FavoritesService) {}

  ngOnInit(): void {
    this.favoriteService.getFavorites();
    this.favSub = this.favoriteService
      .getFavoriteUpdateListener()
      .subscribe((data) => {
        console.log(data);

        // this.favorites = items
      });
    // console.log(this.favorites);
  }
}
