import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ImageUploadService {
  constructor(private http: HttpClient) {}

  uploadImage(image: File): any {
    const formData = new FormData();
    console.log('service', image);

    formData.append('image', image);

    console.log('formData', formData.get('image'));

    return this.http.post('/api/drink-posts/images', formData.get('image'));
  }
}
