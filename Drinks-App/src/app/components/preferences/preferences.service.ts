import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Item } from './item';
import { Subject } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class PreferencesService {
  items: Item[] = [];
  itemsUpdated = new Subject<Item[]>();

  constructor(private http: HttpClient, private auth: AuthService) {}

  getItems() {
    let headers = new HttpHeaders();
    headers = headers.set(
      'authorization',
      localStorage.getItem('topShelf_token')
    );

    this.http
      .get<{ message: string; items: any }>('/api/preferences', { headers })
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
    console.log('service', formValue);
    let headers = new HttpHeaders();
    headers = headers.set(
      'authorization',
      localStorage.getItem('topShelf_token')
    );

    this.http
      .post<{ message: string; items: any }>('/api/preferences', formValue, {
        headers,
      })
      .subscribe((response) => {
        console.log(response.message);
        this.itemsUpdated.next(response.items);
      });
  }

  deleteItem(itemId) {
    this.http
      .delete<{ message: string; items: any }>(`/api/preferences/${itemId}`)
      .subscribe(() => {
        this.items = this.items.filter((item) => item.preference_id !== itemId);
        this.itemsUpdated.next([...this.items]);
      });
  }
}
