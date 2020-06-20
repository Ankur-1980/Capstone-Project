import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PreferencesMainComponent } from './preferences-main/preferences-main.component';
import { PreferencesBartendersComponent } from './preferences-bartenders/preferences-bartenders.component';
import { PreferencesHomeBarComponent } from './preferences-home-bar/preferences-home-bar.component';
import { PreferencesLocationsComponent } from './preferences-locations/preferences-locations.component';
import { PreferencesDrinksComponent } from './preferences-drinks/preferences-drinks.component';
import { AuthGuard } from 'src/app/services/auth-guard.guard';

const routes: Routes = [
  {
    path: '',
    component: PreferencesMainComponent,
  },
  // {
  //   path: 'bartenders',
  //   component: PreferencesBartendersComponent,
  //   canActivate: [AuthGuard],
  // },
  // {
  //   path: 'home-bar',
  //   component: PreferencesHomeBarComponent,
  //   canActivate: [AuthGuard],
  // },
  // {
  //   path: 'locations',
  //   component: PreferencesLocationsComponent,
  //   canActivate: [AuthGuard],
  // },
  // {
  //   path: 'drinks',
  //   component: PreferencesDrinksComponent,
  //   canActivate: [AuthGuard],
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreferencesRoutingModule {}
