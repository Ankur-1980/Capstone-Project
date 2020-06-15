import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from './item';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PreferencesService {
  items: Item[] = [];
  itemsUpdated = new Subject<Item[]>();
  // bartenders = [];
  // homeBar = [];
  // locations = [];
  // locationsUpdated = new Subject<Item[]>();
  // homeBarUpdated = new Subject<Item[]>();
  //   bartendersUpdated = new Subject<Item[]>();
  constructor(private http: HttpClient) {}

  getItems() {
    this.http
      .get<{ message: string; items: any }>('/api/preferences')
      .subscribe((data) => {
        console.log(data.message);
        this.items = data.items;
        this.itemsUpdated.next([...this.items]);
      });
  }

  // getBartenders() {
  //   this.http
  //     .get<{ message: string; items: any }>('/api/preferences/bartenders')
  //     .subscribe((data) => {
  //       console.log(data.message);
  //       this.bartenders = data.items;
  //       this.bartendersUpdated.next([...this.bartenders]);
  //     });
  // }

  // getBartenderUpdateListener() {
  //   return this.bartendersUpdated.asObservable();
  // }

  // getLocations() {
  //   this.http
  //     .get<{ message: string; items: any }>('/api/preferences/locations')
  //     .subscribe((data) => {
  //       console.log(data.message);
  //       this.locations = data.items;
  //       this.locationsUpdated.next([...this.locations]);
  //       console.log('service', this.locations);
  //     });
  // }

  // getLocationsUpdateListener() {
  //   return this.locationsUpdated.asObservable();
  // }

  // getHomeBar() {
  //   console.log('service working?');

  //   this.http
  //     .get<{ message: string; items: any }>('/api/preferences/home-bar')
  //     .subscribe((data) => {
  //       console.log(data.message);
  //       this.homeBar = data.items;
  //       this.homeBarUpdated.next([...this.homeBar]);
  //     });
  // }

  // getHomeBarUpdateListener() {
  //   return this.homeBarUpdated.asObservable();
  // }

  getItemUpdateListener() {
    return this.itemsUpdated.asObservable();
  }

  addItems(formValue) {
    console.log(formValue);

    this.http
      .post<{ message: string; items: any }>('/api/preferences', formValue)
      .subscribe((response) => {
        console.log(response.message);
        this.itemsUpdated.next(response.items);
      });
  }

  deleteItem(itemId) {
    this.http
      .delete<{ message: string; items: any }>(`/api/preferences/${itemId}`)
      .subscribe(() => {
        console.log('before', this.items);

        this.items = this.items.filter((item) => item.preference_id !== itemId);
        this.itemsUpdated.next([...this.items]);
        console.log('after', this.items);
      });
  }
}
