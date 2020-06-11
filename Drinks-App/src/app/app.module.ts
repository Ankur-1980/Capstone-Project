import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './components/main/main.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { NewUserFormComponent } from './components/new-user/new-user-form/new-user-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RecipeMainComponent } from './components/recipe-book/recipe-main/recipe-main.component';
import { RecipeFavoritesComponent } from './components/recipe-book/recipe-favorites/recipe-favorites.component';
import { RecipeDetailsComponent } from './components/recipe-book/recipe-details/recipe-details.component';
import { RecipeCardComponent } from './components/recipe-book/recipe-card/recipe-card.component';
import { RecipeSearchComponent } from './components/recipe-book/recipe-search/recipe-search.component';
import { UserRecipesMainComponent } from './components/user-recipes/user-recipes-main/user-recipes-main.component';
import { UserRecipesCreateComponent } from './components/user-recipes/user-recipes-create/user-recipes-create.component';
import { LoginFormComponent } from './components/new-user/login-form/login-form.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NewUserFormComponent,
    RecipeMainComponent,
    RecipeFavoritesComponent,
    RecipeDetailsComponent,
    RecipeCardComponent,
    RecipeSearchComponent,
    UserRecipesMainComponent,
    UserRecipesCreateComponent,
    LoginFormComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GoogleMapsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
