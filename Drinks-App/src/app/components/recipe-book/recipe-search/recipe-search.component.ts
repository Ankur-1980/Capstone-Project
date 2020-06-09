import { Component, OnInit } from '@angular/core';
import { RecipeApiService } from '../../../services/recipeAPI.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'recipe-search',
  templateUrl: './recipe-search.component.html',
  styleUrls: ['./recipe-search.component.css'],
})
export class RecipeSearchComponent implements OnInit {
  glassware: any;
  alcoholic: any;
  categories: any;
  constructor(private fb: FormBuilder, private recipeAPI: RecipeApiService) {}

  ngOnInit(): void {
    this.recipeAPI.getGlassware().subscribe((data) => {
      this.glassware = data['drinks'];
    });
    this.recipeAPI.getAlcoholic().subscribe((data) => {
      this.alcoholic = data['drinks'];
    });
    this.recipeAPI.getCategories().subscribe((data) => {
      this.categories = data['drinks'];
    });
  }
}
