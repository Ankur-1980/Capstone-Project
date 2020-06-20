import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageUploadComponent } from './image-upload.component';
import { ImageCropperModule } from 'ngx-image-cropper';

@NgModule({
  declarations: [ImageUploadComponent],
  exports: [ImageUploadComponent],
  imports: [CommonModule, ImageCropperModule],
})
export class ImageUploadModule {}
