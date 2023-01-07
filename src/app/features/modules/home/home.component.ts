import { Image } from './../../../core/models/image.model';
import { ModalService } from './../../../core/services/modal.service';
import { GalleryService } from '../../../core/services/gallery.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  constructor(
    private galleryService: GalleryService,
    private modalService: ModalService
  ) {}

  handleGetAllImages() {
    return this.galleryService.images$;
  }

  handleOpenViewImageModal(image: Image) {
    this.modalService.openViewImageDialog(image);
  }
}
