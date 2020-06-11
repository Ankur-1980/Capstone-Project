import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserRecipesMainComponent } from './user-recipes-main/user-recipes-main.component';

const routes: Routes = [
  {
    path: '',
    component: UserRecipesMainComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRecipesRoutingModule {}
