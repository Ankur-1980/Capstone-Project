import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { TheFeedMainComponent } from './components/the-feed/the-feed-main/the-feed-main.component';
import { QuizComponent } from './components/quiz/quiz.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  {
    path: 'profile',
    component: UserProfileComponent,
  },
  {
    path: 'the-feed',
    component: TheFeedMainComponent,
  },
  {
    path: 'quiz',
    component: QuizComponent,
  },

  {
    path: 'preferences',
    loadChildren: () =>
      import('./components/preferences/preferences.module').then(
        (m) => m.PreferencesModule
      ),
  },
  {
    path: 'recipe-book',
    loadChildren: () =>
      import('./components/recipe-book/recipe-book.module').then(
        (m) => m.RecipeBookModule
      ),
  },
  {
    path: 'user-recipes',
    loadChildren: () =>
      import('./components/user-recipes/user-recipes.module').then(
        (m) => m.UserRecipesModule
      ),
  },

  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
