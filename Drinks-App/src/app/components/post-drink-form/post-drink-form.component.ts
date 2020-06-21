import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RecipeApiService } from 'src/app/services/recipeAPI.service';
import { DrinkPostService } from 'src/app/services/drink-post.service';

@Component({
  selector: 'post-drink-form',
  templateUrl: './post-drink-form.component.html',
  styleUrls: ['./post-drink-form.component.css'],
})
export class PostDrinkFormComponent implements OnInit {
  drinkPostForm: FormGroup;
  glassware: string;

  constructor(
    private fb: FormBuilder,
    private recipeApi: RecipeApiService,
    private drinkPostService: DrinkPostService
  ) {}

  ngOnInit(): void {
    this.recipeApi.getGlassware().subscribe((data) => {
      this.glassware = data['drinks'];
    });

    this.drinkPostForm = this.fb.group({
      name: ['', [Validators.required]],
      rating: [''],
      glassware: [''],
      description: [''],
      location: [''],
      image: [null, [Validators.required]],
    });
  }

  onSubmit() {
    this.drinkPostService.postADrink(this.drinkPostForm.value);
  }
}
