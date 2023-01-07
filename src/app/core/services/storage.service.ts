import { Image, ImageFile } from './../models/image.model';
import { Injectable } from '@angular/core';
import {
  getDownloadURL,
  ref,
  Storage,
  uploadBytes,
} from '@angular/fire/storage';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor(private firebaseStorage: Storage) {}

  async uploadFile(imageFile: ImageFile) {
    try {
      const fileRef = ref(this.firebaseStorage, imageFile.getSanitizedName());
      await uploadBytes(fileRef, imageFile.file);
      imageFile.url = await getDownloadURL(fileRef);
      return imageFile.toImage();
    } catch (error: any) {
      throw new Error('File Upload Failed: ' + error.message);
    }
  }
}
