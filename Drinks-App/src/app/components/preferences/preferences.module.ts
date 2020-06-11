import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreferencesRoutingModule } from './preferences-routing.module';
import { PreferencesMainComponent } from './preferences-main/preferences-main.component';

@NgModule({
  declarations: [PreferencesMainComponent],
  imports: [CommonModule, PreferencesRoutingModule],
})
export class PreferencesModule {}
