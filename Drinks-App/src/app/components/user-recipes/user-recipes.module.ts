import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRecipesMainComponent } from './user-recipes-main/user-recipes-main.component';
import { UserRecipesCreateComponent } from './user-recipes-create/user-recipes-create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserRecipesRoutingModule } from './user-recipes-routing.module';

@NgModule({
  declarations: [UserRecipesMainComponent, UserRecipesCreateComponent],
  imports: [CommonModule, ReactiveFormsModule, UserRecipesRoutingModule],
})
export class UserRecipesModule {}
