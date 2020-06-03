import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  categories: any[];
  glasses: any[];
  ingredients: any[];
  alcoholics: any[];

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getCategories().subscribe((data) => {
      this.categories = data['drinks'];
      // console.log(this.categories);
    });

    this.api.getGlassware().subscribe((data) => {
      this.glasses = data['drinks'];
      // console.log(this.glasses);
    });

    this.api.getIngredients().subscribe((data) => {
      this.ingredients = data['drinks'];
      // console.log(this.ingredients);
    });

    this.api.getAlcoholic().subscribe((data) => {
      this.alcoholics = data['drinks'];
      // console.log(this.alcoholics);
    });

    this.api.getLetterA().subscribe((data) => {
      console.log(data);
    });
  }
}
