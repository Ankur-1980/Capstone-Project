import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './components/main/main.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { NewUserFormComponent } from './components/login/new-user-form/new-user-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, MainComponent, NewUserFormComponent],
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
