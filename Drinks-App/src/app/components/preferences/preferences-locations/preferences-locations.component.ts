import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Item } from '../item';
import { PreferencesService } from '../preferences.service';

@Component({
  selector: 'preferences-locations',
  templateUrl: './preferences-locations.component.html',
  styleUrls: [
    './preferences-locations.component.css',
    '../preferences-pages.css',
  ],
})
export class PreferencesLocationsComponent implements OnInit {
  locations: Item[] = [];
  itemsSub: Subscription;

  constructor(private preferService: PreferencesService) {}

  ngOnInit(): void {
    this.preferService.getItems();
    this.itemsSub = this.preferService
      .getItemUpdateListener()
      .subscribe((items) => {
        this.locations = items.filter(
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
