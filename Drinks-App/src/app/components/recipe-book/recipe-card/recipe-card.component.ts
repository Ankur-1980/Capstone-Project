import { Component, OnInit, Input } from '@angular/core';
import { FavoritesService } from 'src/app/services/favorites.service';

@Component({
  selector: 'recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.css'],
})
export class RecipeCardComponent implements OnInit {
  @Input() recipe;

  constructor(public favoriteService: FavoritesService) {}

  ngOnInit(): void {}

  toggleAddRemove() {
    this.favoriteService.addToFavorites(this.recipe);
    // if (this.favoriteService.containsFavorite(this.recipe)) {
    //   this.favoriteService.removeFromFavorites(this.recipe);
    // } else {
    //   this.favoriteService.addToFavorites(this.recipe);
    // }
  }
}
