import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { RecipeApiService } from 'src/app/services/recipeAPI.service';
import { UserRecipesService } from 'src/app/components/user-recipes/user-recipes.service';

@Component({
  selector: 'user-recipes-create',
  templateUrl: './user-recipes-create.component.html',
  styleUrls: ['./user-recipes-create.component.css'],
})
export class UserRecipesCreateComponent implements OnInit {
  userRecipe: FormGroup;
  ratingChange;
  glassware;
  latitude;
  longitude;
  ratingDisplay;

  constructor(
    private fb: FormBuilder,
    private recipeAPI: RecipeApiService,
    private userRecipeService: UserRecipesService
  ) {}

  ngOnInit(): void {
    this.recipeAPI.getGlassware().subscribe((data) => {
      this.glassware = data['drinks'];
    });
    const element = this.fb.group({
      amount: [''],
      ingredient: [''],
    });

    this.userRecipe = this.fb.group({
      name: ['', [Validators.required]],
      rating: [''],
      glassware: [''],
      latitude: [''],
      longitude: [''],
      method: [''],
      ingredient1: element,
      ingredient2: element,
      ingredient3: element,
      ingredient4: element,
      ingredient5: element,
      // date: this.fb.control(new Date()),
    });

    this.userRecipe.valueChanges.subscribe((value) => {
      this.ratingDisplay = value.rating;
    });
  }

  // removeIngredient(i) {
  //   let ingredientsArray = this.userRecipe.controls.ingredients as FormArray;
  //   ingredientsArray.removeAt(i);
  // }

  // addIngredient() {
  //   let ingredientsArray = this.userRecipe.controls.ingredients as FormArray;
  //   let arrayLen = ingredientsArray.length;

  //   let newIngredientGroup: FormGroup = this.fb.group({
  //     amount: [''],
  //     ingredient: [''],
  //   });

  //   ingredientsArray.insert(arrayLen, newIngredientGroup);
  // }

  changeRating(value) {
    console.log(value);

    // this.ratingChange = value;
  }
  onSubmit() {
    this.userRecipeService.addNewRecipe(this.userRecipe.value);
  }

  getLocation() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;
    });
  }
}
