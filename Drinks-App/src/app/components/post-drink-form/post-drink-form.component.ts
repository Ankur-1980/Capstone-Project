import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  NG_ASYNC_VALIDATORS,
} from '@angular/forms';
import { RecipeApiService } from 'src/app/services/recipeAPI.service';
import { DrinkPostService } from 'src/app/services/drink-post.service';
import { mimeType } from './mime-type.validator';

@Component({
  selector: 'post-drink-form',
  templateUrl: './post-drink-form.component.html',
  styleUrls: ['./post-drink-form.component.css'],
})
export class PostDrinkFormComponent implements OnInit {
  drinkPostForm: FormGroup;
  glassware: string;
  imagePreview;

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
      // drinkPic: [''],
      name: ['', [Validators.required]],
      rating: [''],
      glassware: [''],
      description: [''],
      location: [''],
      image: [null],
    });
  }

  onSubmit() {
    this.drinkPostService.postADrink(this.drinkPostForm.value);
  }

  pickImage(event: Event) {
    // casting as HTMLInputElement tells typescript to give access to the files method
    const file = (event.target as HTMLInputElement).files[0];
    this.drinkPostForm.patchValue({ image: file });
    // updates the form
    this.drinkPostForm.get('image').updateValueAndValidity();
    // FileReader is built into JS
    const reader = new FileReader();
    // function will get called after the file is done loading
    reader.onload = () => {
      this.imagePreview = reader.result;
    };
    // load the file
    reader.readAsDataURL(file);
  }
}
