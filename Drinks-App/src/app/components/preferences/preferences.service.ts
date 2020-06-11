import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from './item';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PreferencesService {
  items: Item[];
  itemsUpdated = new Subject<Item[]>();
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
      .subscribe((response) => {
        // console.log(response.message);
        // console.log('service', response.items);

        this.items = response.items;
        this.items = this.items.filter((item) => item.preference_id !== itemId);
        this.itemsUpdated.next([...this.items]);
      });
  }
}