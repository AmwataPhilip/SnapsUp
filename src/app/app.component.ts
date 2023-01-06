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
  constructor(private authService: AuthService, private router: Router) {}

  isLoggedIn() {
    return this.authService.isLoggedIn;
  }

  async handleLogout() {
    await this.authService.logout();
    this.navigateToLogin();
  }

  navigateToLogin() {
    this.router.navigate([ROUTES.auth.login]);
  }
}
