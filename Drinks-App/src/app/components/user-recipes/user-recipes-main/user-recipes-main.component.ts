import { Component, OnInit } from '@angular/core';
import { UserRecipesService } from 'src/app/components/user-recipes/user-recipes.service';

@Component({
  selector: 'user-recipes-main',
  templateUrl: './user-recipes-main.component.html',
  styleUrls: ['./user-recipes-main.component.css'],
})
export class UserRecipesMainComponent implements OnInit {
  constructor(private userRecipeService: UserRecipesService) {}

  ngOnInit(): void {
    this.userRecipeService
      .getRecipes()
      .subscribe((data) => console.log('User Recipes', data));
  }
}
