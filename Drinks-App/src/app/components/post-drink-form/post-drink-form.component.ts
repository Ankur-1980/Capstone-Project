import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RecipeApiService } from 'src/app/services/recipeAPI.service';

@Component({
  selector: 'post-drink-form',
  templateUrl: './post-drink-form.component.html',
  styleUrls: ['./post-drink-form.component.css'],
})
export class PostDrinkFormComponent implements OnInit {
  drinkPostForm: FormGroup;
  glassware;

  constructor(private fb: FormBuilder, private recipeApi: RecipeApiService) {}

  ngOnInit(): void {
    this.recipeApi.getGlassware().subscribe((data) => {
      this.glassware = data['drinks'];
    });

    this.drinkPostForm = this.fb.group({
      // drinkPic: [''],
      name: ['', [Validators.required]],
      rating: [''],
      glassware: [''],
      description: [''],
      location: [''],
    });
  }

  onSubmit() {
    console.log(this.drinkPostForm.value);
  }
}
