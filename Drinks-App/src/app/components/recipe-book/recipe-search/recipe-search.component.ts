import { Component, OnInit } from '@angular/core';
import { RecipeApiService } from '../../../services/recipeAPI.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ALPHABET } from './alphabet';

@Component({
  selector: 'recipe-search',
  templateUrl: './recipe-search.component.html',
  styleUrls: ['./recipe-search.component.css'],
})
export class RecipeSearchComponent implements OnInit {
  glassware: any;
  alcoholic: any;
  categories: any;
  alphabet: string[] = ALPHABET;
  filterForm: FormGroup;

  constructor(private fb: FormBuilder, private recipeAPI: RecipeApiService) {}

  ngOnInit(): void {
    this.recipeAPI.getGlassware().subscribe((data) => {
      this.glassware = data['drinks'];
      console.log(this.glassware);
    });
    this.recipeAPI.getAlcoholic().subscribe((data) => {
      this.alcoholic = data['drinks'];
      console.log(this.alcoholic);
    });
    this.recipeAPI.getCategories().subscribe((data) => {
      this.categories = data['drinks'];
      console.log(this.categories);
    });

    this.filterForm = this.fb.group({
      glassware: [''],
      categories: [''],
      booze: [''],
      alphabet: [''],
    });
    this.filterForm.valueChanges.subscribe((value) => console.log(value));
  }

  onSubmit() {}

  resetForm() {
    this.filterForm.reset();
  }
}
