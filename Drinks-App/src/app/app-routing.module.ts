import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { RecipeDetailsComponent } from './components/recipe-book/recipe-details/recipe-details.component';
import { RecipeMainComponent } from './components/recipe-book/recipe-main/recipe-main.component';
import { PreferencesMainComponent } from './components/preferences/preferences-main/preferences-main.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'recipe-details/:recipeID', component: RecipeDetailsComponent },
  { path: 'recipe-book', component: RecipeMainComponent },
  { path: 'preferences', component: PreferencesMainComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
