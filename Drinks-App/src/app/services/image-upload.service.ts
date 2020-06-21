import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ImageUploadService {
  constructor() {}

  upLoadImage(image: File) {
    const formData = new FormData();
    formData.append('image', image);
  }
}
