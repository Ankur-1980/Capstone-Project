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
  locationsSub: Subscription;

  constructor(private preferService: PreferencesService) {}

  ngOnInit(): void {
    this.preferService.getLocations();
    this.locationsSub = this.preferService
      .getLocationsUpdateListener()
      .subscribe((locations) => {
        this.locations = locations;
      });
  }

  onDelete(itemId) {
    this.preferService.deleteItem(itemId);
  }

  ngOnDestroy() {
    this.locationsSub.unsubscribe();
  }
}
