import { Component, OnInit, OnDestroy } from '@angular/core';
import { Item } from '../item';
import { Subscription } from 'rxjs';
import { PreferencesService } from '../preferences.service';

@Component({
  selector: 'preferences-home-bar',
  templateUrl: './preferences-home-bar.component.html',
  styleUrls: [
    './preferences-home-bar.component.css',
    '../preferences-pages.css',
  ],
})
export class PreferencesHomeBarComponent implements OnInit, OnDestroy {
  homeBar: Item[] = [];
  homeBarSub: Subscription;

  constructor(private preferService: PreferencesService) {}

  ngOnInit(): void {
    this.preferService.getHomeBar();
    this.homeBarSub = this.preferService
      .getHomeBarUpdateListener()
      .subscribe((homeBar) => {
        this.homeBar = homeBar;
      });
  }

  onDelete(itemId) {
    this.preferService.deleteItem(itemId);
  }

  ngOnDestroy() {
    this.homeBarSub.unsubscribe();
  }
}
