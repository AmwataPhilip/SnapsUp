import { Injectable } from '@angular/core';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { addDoc } from '@firebase/firestore';
import { Observable } from 'rxjs';
import { Image } from '../models/image.model';

@Injectable({
  providedIn: 'root',
})
export class GalleryService {
  images$: Observable<Image[]>;
  constructor(private firestore: Firestore) {
    this.images$ = collectionData(
      collection(this.firestore, 'Images')
    ) as Observable<Image[]>;
  }

  async uploadImage(image: Image) {
    const imagesRef = collection(this.firestore, 'Images');
    await addDoc(imagesRef, image.toFirestoreImage());
  }
}
