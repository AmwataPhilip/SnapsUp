import { HomeService } from './../../../core/services/home.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  constructor(private homeService: HomeService) {}

  handleGetAllImages() {
    return this.homeService.images$;
  }
}
