import { Component, Output, EventEmitter } from '@angular/core';
import { ImageUploadService } from './image-upload.service';

export class ImageSnippet {
  src: string;
  status = 'INIT';

  constructor(public name: string, public type: string) {}
}

@Component({
  selector: 'image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css'],
})
export class ImageUploadComponent {
  @Output() imageUploaded = new EventEmitter();
  @Output() imageCanceled = new EventEmitter();

  selectedImage: ImageSnippet;
  imageChangedEvent: any = '';

  private fileReader = new FileReader();

  constructor(private imageService: ImageUploadService) {}

  ngOnInit() {
    this.listenToFileLoading();
  }

  ngOnDestroy() {
    this.removeFileLoadListener();
  }

  uploadImage() {
    console.log('component firing?');

    this.selectedImage.status = 'PENDING';

    this.imageService.uploadImage(this.selectedImage);
    // .subscribe(
    //   (uploadedImage: any) => {
    //     this.imageUploaded.emit(uploadedImage._id);
    //     this.selectedImage.status = 'UPLOADED';
    //     this.imageChangedEvent = null;
    //   },
    //   () => {
    //     this.selectedImage.status = 'ERROR';
    //     this.imageChangedEvent = null;
    //   }
    // );
  }

  cancelImage(fileInput: any) {
    this.selectedImage = null;
    fileInput.value = null;
    this.imageChangedEvent = null;
    this.imageCanceled.emit();
  }

  onImageLoad(event: any) {
    this.imageChangedEvent = event;
    const file: File = event.target.files[0];

    this.selectedImage = new ImageSnippet(file.name, file.type);

    // this will fire 'load' event
    this.fileReader.readAsDataURL(file);
  }

  private handleImageLoad = (event: any) => {
    const { result } = event.target;
    this.selectedImage.src = result;
    this.selectedImage.status = 'LOADED';
  };

  private listenToFileLoading() {
    this.fileReader.addEventListener('load', this.handleImageLoad);
  }

  private removeFileLoadListener() {
    this.fileReader.removeEventListener('load', this.handleImageLoad);
  }
}
