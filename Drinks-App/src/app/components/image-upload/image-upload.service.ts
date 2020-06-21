import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ImageSnippet } from './image-upload.component';

@Injectable({
  providedIn: 'root',
})
export class ImageUploadService {
  constructor(private http: HttpClient) {}

  uploadImage(image: ImageSnippet) {
    const { src, type, name } = image;
    const file = b64ToFile(src, type, name);
    const formData = new FormData();
    console.log('file', file);

    formData.append('image', file);

    console.log(formData);

    return this.http.post('/api/drink-posts', formData);
  }
}

function b64ToFile(b64Data: string, type = 'image/jpeg', name: string): File {
  let data;
  const aux = b64Data.split(',');
  if (aux.length > 1) {
    data = aux[1];
  } else {
    data = b64Data;
  }

  const byteString = atob(data);
  const ab = new ArrayBuffer(byteString.length);
  const ia = new Uint8Array(ab);
  for (let i = 0; i < byteString.length; i += 1) {
    ia[i] = byteString.charCodeAt(i);
  }
  const blob = new Blob([ab], { type });
  if (!blob) {
    return null;
  }
  return new File([blob], name, { type });
}
