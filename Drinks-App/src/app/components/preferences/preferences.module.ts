import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreferencesRoutingModule } from './preferences-routing.module';
import { PreferencesMainComponent } from './preferences-main/preferences-main.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PreferencesCreateComponent } from './preferences-create/preferences-create.component';
import { PreferencesListComponent } from './preferences-list/preferences-list.component';

@NgModule({
  declarations: [
    PreferencesMainComponent,
    PreferencesListComponent,
    PreferencesCreateComponent,
  ],
  imports: [
    CommonModule,
    PreferencesRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class PreferencesModule {}
