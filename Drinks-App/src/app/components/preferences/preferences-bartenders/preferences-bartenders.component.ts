import { Component, OnInit, OnDestroy } from '@angular/core';
import { PreferencesService } from '../preferences.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'preferences-bartenders',
  templateUrl: './preferences-bartenders.component.html',
  styleUrls: [
    './preferences-bartenders.component.css',
    '../preferences-pages.css',
  ],
})
export class PreferencesBartendersComponent implements OnInit, OnDestroy {
  bartenders = [];
  itemsSub: Subscription;

  constructor(private preferService: PreferencesService) {}

  ngOnInit(): void {
    this.preferService.getItems();
    this.itemsSub = this.preferService
      .getItemUpdateListener()
      .subscribe((items) => {
        this.bartenders = items.filter(
          (item) => item.preference_cat === 'bartenders'
        );
      });
  }

  onDelete(itemId) {
    this.preferService.deleteItem(itemId);
  }

  ngOnDestroy() {
    this.itemsSub.unsubscribe();
  }
}
