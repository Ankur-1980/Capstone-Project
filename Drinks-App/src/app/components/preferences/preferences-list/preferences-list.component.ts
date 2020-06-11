import { Component, OnInit, OnDestroy } from '@angular/core';
import { Item } from '../item';
import { Subscription } from 'rxjs';
import { PreferencesService } from '../preferences.service';

@Component({
  selector: 'preferences-list',
  templateUrl: './preferences-list.component.html',
  styleUrls: ['./preferences-list.component.css'],
})
export class PreferencesListComponent implements OnInit, OnDestroy {
  items: Item[] = [];
  itemsSub: Subscription;

  constructor(private preferService: PreferencesService) {}

  ngOnInit(): void {
    this.preferService.getItems();
    this.itemsSub = this.preferService
      .getItemUpdateListener()
      .subscribe((items) => {
        this.items = items;
      });
  }

  onDelete(itemId) {
    this.preferService.deleteItem(itemId);
  }

  ngOnDestroy() {
    this.itemsSub.unsubscribe();
  }
}
