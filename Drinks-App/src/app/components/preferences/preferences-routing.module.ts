import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PreferencesMainComponent } from './preferences-main/preferences-main.component';

const routes: Routes = [
  {
    path: '',
    component: PreferencesMainComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreferencesRoutingModule {}
