import { Component, OnInit } from '@angular/core';
import { PreferencesService } from '../preferences.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-preferences-bartenders',
  templateUrl: './preferences-bartenders.component.html',
  styleUrls: [
    './preferences-bartenders.component.css',
    '../preferences-pages.css',
  ],
})
export class PreferencesBartendersComponent implements OnInit {
  bartenders = [];
  bartendersSub: Subscription;

  constructor(private preferService: PreferencesService) {}

  ngOnInit(): void {
    this.preferService.getBartenders();
    this.bartendersSub = this.preferService
      .getBartenderUpdateListener()
      .subscribe((items) => {
        this.bartenders = items;
        console.log(this.bartenders);
      });
  }

  onDelete(itemId) {
    this.preferService.deleteItem(itemId);
  }

  ngOnDestroy() {
    this.bartendersSub.unsubscribe();
  }
}
