import { ModalService } from './../../../../core/services/modal.service';
import { ImageFile } from './../../../../core/models/image.model';
import { GalleryService } from './../../../../core/services/gallery.service';
import { StorageService } from './../../../../core/services/storage.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
})
export class UploadImageComponent {
  imageName = '';
  constructor(
    private storageService: StorageService,
    private galleryService: GalleryService,
    private modalService: ModalService
  ) {}

  async handleUploadFiles($event: any) {
    const fileList: FileList = $event.target.files;
    if (fileList) {
      const file = fileList[0];
      const image = await this.storageService.uploadFile(
        new ImageFile(file, this.imageName, '')
      );
      await this.galleryService.uploadImage(image);
    }
    this.handleCloseModal();
  }

  handleCloseModal() {
    this.modalService.closeDialog();
  }
}
