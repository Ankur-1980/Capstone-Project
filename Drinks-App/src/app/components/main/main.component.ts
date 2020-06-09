import { Component, OnInit } from '@angular/core';
import { RecipeApiService } from '../../services/recipeAPI.service';
import { LoginService } from 'src/app/services/login.service';

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
  zoom = 12;
  center: google.maps.LatLngLiteral;
  options: google.maps.MapOptions = {
    mapTypeId: 'hybrid',
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    maxZoom: 15,
    minZoom: 8,
  };

  latitude;
  longitude;

  constructor(
    private drinksApi: RecipeApiService,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.loginService.getUsers().subscribe((data) => console.log(data));

    this.drinksApi.getCategories().subscribe((data) => {
      this.categories = data['drinks'];
      // console.log(this.categories);
    });

    this.drinksApi.getGlassware().subscribe((data) => {
      this.glasses = data['drinks'];
      // console.log(this.glasses);
    });

    this.drinksApi.getIngredients().subscribe((data) => {
      this.ingredients = data['drinks'];
      console.log('Ingredients', this.ingredients);
    });

    this.drinksApi.getAlcoholic().subscribe((data) => {
      this.alcoholics = data['drinks'];
      // console.log(this.alcoholics);
    });

    this.drinksApi.getLetterA().subscribe((data) => {
      console.log('letter A', data);
    });

    // navigator.geolocation.getCurrentPosition((position) => {
    //   this.center = {
    //     lat: position.coords.latitude,
    //     lng: position.coords.longitude,
    //   };
    //   this.latitude = position.coords.latitude;
    //   this.longitude = position.coords.longitude;
    // });
  }
}
