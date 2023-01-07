import { Image } from './../models/image.model';
import { ViewImageComponent } from './../../features/modules/shared/view-image/view-image.component';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UploadImageComponent } from 'src/app/features/modules/shared/upload-image/upload-image.component';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  constructor(private matDialog: MatDialog) {}

  openImageUploaderDialog() {
    this.matDialog.open(UploadImageComponent);
  }

  openViewImageDialog(image: Image) {
    this.matDialog.open(ViewImageComponent, { data: image });
  }

  closeDialog() {
    this.matDialog.closeAll();
  }
}
