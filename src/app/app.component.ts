import { ModalService } from './core/services/modal.service';
import { ROUTES } from './core/consts/routes.consts';
import { Router } from '@angular/router';
import { AuthService } from './core/services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'SnapsUp';
  constructor(
    private authService: AuthService,
    private modalService: ModalService,
    private router: Router
  ) {}

  isLoggedIn() {
    return this.authService.isLoggedIn;
  }

  async handleLogout() {
    await this.authService.logout();
    this.navigateToLogin();
  }

  async handleOpenImageUploadComponent() {
    this.modalService.openImageUploaderDialog();
  }

  navigateToLogin() {
    this.router.navigate([ROUTES.auth.login]);
  }
}
