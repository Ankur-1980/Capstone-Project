import { Component, OnInit, OnDestroy } from '@angular/core';
import { FavoritesService } from 'src/app/services/favorites.service';
import { Subscription } from 'rxjs';
import { MOCK_PREFER } from 'src/app/MOCK_DATA/mock-preferences';

@Component({
  selector: 'preferences-drinks',
  templateUrl: './preferences-drinks.component.html',
  styleUrls: ['./preferences-drinks.component.css'],
})
export class PreferencesDrinksComponent implements OnInit, OnDestroy {
  favorites = MOCK_PREFER;
  favSub: Subscription;
  constructor(private favoriteService: FavoritesService) {}

  ngOnInit(): void {
    // this.favoriteService.getFavorites();
    // this.favSub = this.favoriteService
    //   .getFavoriteUpdateListener()
    //   .subscribe((data) => {
    //     this.favorites = data;
    //     console.log(this.favorites);
    //   });
  }

  onDelete(drinkId) {
    this.favoriteService.deleteFromPref(drinkId);
  }

  ngOnDestroy() {
    this.favSub.unsubscribe();
  }
}
