import { Component, OnInit, OnDestroy } from '@angular/core';
import { Image } from 'src/app/interfaces/image';

class ImageSnippet {
  src: string;
  file: File;
  status: string;

  constructor(file?: File) {
    this.file = file;
    this.status = 'INIT';
  }
}

@Component({
  selector: 'image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css'],
})
export class ImageUploadComponent implements OnInit, OnDestroy {
  private fileReader = new FileReader();
  selectedImage: ImageSnippet;

  constructor() {}

  ngOnInit(): void {
    this.fileReader.addEventListener('load', this.handleLoadImage);
  }

  ngOnDestroy() {
    this.fileReader.removeEventListener('load', this.handleLoadImage);
  }

  loadImage(event: any) {
    const file = event.target.files[0];
    this.selectedImage = new ImageSnippet(file);

    this.fileReader.readAsDataURL(file);
    console.log(this.selectedImage);
  }

  private handleLoadImage = (event) => {
    const { result } = event.target;
    this.selectedImage.src = result;
    this.selectedImage.status = 'LOADED';
  };

  uploadImage() {
    this.selectedImage.status = 'PENDING';
  }

  cancelImage() {}
}
