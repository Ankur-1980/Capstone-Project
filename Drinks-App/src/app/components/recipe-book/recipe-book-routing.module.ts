import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeMainComponent } from './recipe-main/recipe-main.component';

const routes: Routes = [
  {
    path: '',
    component: RecipeMainComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipeBookRoutingModule {}
