import { GalleryService } from '../../../core/services/gallery.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  constructor(private galleryService: GalleryService) {}

  handleGetAllImages() {
    return this.galleryService.images$;
  }
}
