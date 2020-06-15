import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PreferencesMainComponent } from './preferences-main/preferences-main.component';
import { PreferencesBartendersComponent } from './preferences-bartenders/preferences-bartenders.component';
import { PreferencesHomeBarComponent } from './preferences-home-bar/preferences-home-bar.component';
import { PreferencesLocationsComponent } from './preferences-locations/preferences-locations.component';
import { PreferencesDrinksComponent } from './preferences-drinks/preferences-drinks.component';

const routes: Routes = [
  {
    path: '',
    component: PreferencesMainComponent,
  },
  {
    path: 'bartenders',
    component: PreferencesBartendersComponent,
  },
  {
    path: 'home-bar',
    component: PreferencesHomeBarComponent,
  },
  {
    path: 'locations',
    component: PreferencesLocationsComponent,
  },
  {
    path: 'drinks',
    component: PreferencesDrinksComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreferencesRoutingModule {}
