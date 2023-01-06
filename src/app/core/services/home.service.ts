import { Injectable } from '@angular/core';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  images$: Observable<{ url: string }[]>;
  constructor(private firestore: Firestore) {
    this.images$ = collectionData(
      collection(this.firestore, 'Images')
    ) as Observable<{ url: string }[]>;
  }

  getAllImages() {
    // return [
    //   {
    //     url: 'http://127.0.0.1:9096/v0/b/snaps-up-prod.appspot.com/o/-2d3dx.jpg?alt=media&token=5c2bc43a-d843-4ff4-9a6b-861c28ef3da8',
    //   },
    // ];
  }
}
