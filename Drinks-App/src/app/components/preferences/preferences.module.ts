import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreferencesRoutingModule } from './preferences-routing.module';
import { PreferencesMainComponent } from './preferences-main/preferences-main.component';
import { PreferencesHomebarComponent } from './preferences-homebar/preferences-homebar.component';
import { PreferencesLocationsComponent } from './preferences-locations/preferences-locations.component';
import { PreferencesBartendersComponent } from '../preferences/preferences-bartenders/preferences-bartenders.component';
import { PreferencesDrinksComponent } from '../preferences/preferences-drinks/preferences-drinks.component';
import { PreferencesInputComponent } from '../preferences/preferences-input/preferences-input.component';
import { PreferencesPostComponent } from '../preferences/preferences-post/preferences-post.component';

@NgModule({
  declarations: [
    PreferencesMainComponent,
    PreferencesHomebarComponent,
    PreferencesLocationsComponent,
    PreferencesBartendersComponent,
    PreferencesDrinksComponent,
    PreferencesInputComponent,
    PreferencesPostComponent,
  ],
  imports: [CommonModule, PreferencesRoutingModule],
})
export class PreferencesModule {}
