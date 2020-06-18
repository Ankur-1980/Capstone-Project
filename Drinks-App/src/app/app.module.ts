import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MainComponent } from './components/main/main.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { NewUserFormComponent } from './components/new-user/new-user-form/new-user-form.component';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginFormComponent } from './components/new-user/login-form/login-form.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RecipeBookModule } from './components/recipe-book/recipe-book.module';
import { PreferencesModule } from './components/preferences/preferences.module';
import { UserRecipesModule } from './components/user-recipes/user-recipes.module';
import { PostDrinkFormComponent } from './components/post-drink-form/post-drink-form.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

import { TheFeedPostsComponent } from './components/the-feed/the-feed-posts/the-feed-posts.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { QuestionComponent } from './components/quiz/question/question.component';
import { TokenInterceptorService } from './services/token-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NewUserFormComponent,
    LoginFormComponent,
    NavbarComponent,
    PostDrinkFormComponent,
    UserProfileComponent,

    TheFeedPostsComponent,
    QuizComponent,
    QuestionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GoogleMapsModule,
    ReactiveFormsModule,
    RecipeBookModule,
    PreferencesModule,
    UserRecipesModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
