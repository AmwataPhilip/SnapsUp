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

  closeDialog() {
    this.matDialog.closeAll();
  }
}
