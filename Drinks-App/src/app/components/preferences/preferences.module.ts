import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreferencesRoutingModule } from './preferences-routing.module';
import { PreferencesMainComponent } from './preferences-main/preferences-main.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PreferencesMainComponent],
  imports: [
    CommonModule,
    PreferencesRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class PreferencesModule {}
