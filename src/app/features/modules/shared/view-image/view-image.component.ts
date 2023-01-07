import { Image } from './../../../../core/models/image.model';
import { ModalService } from './../../../../core/services/modal.service';
import { Component, Input, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-view-image',
  templateUrl: './view-image.component.html',
})
export class ViewImageComponent {
  constructor(
    private modalService: ModalService,
    @Inject(MAT_DIALOG_DATA) private image: Image
  ) {}

  getImage() {
    return this.image;
  }

  handleCloseModal() {
    this.modalService.closeDialog();
  }
}
