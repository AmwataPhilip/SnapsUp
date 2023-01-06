import { ROUTES } from './../../../consts/routes.consts';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router) {}

  async signInWithGoogle() {
    await this.authService.signInWithGoogle();
    this.navigateToHomePage();
  }

  async signInAnonymously() {
    await this.authService.signInAnonymously();
    this.navigateToHomePage();
  }

  navigateToHomePage() {
    this.router.navigate([ROUTES.home]);
  }
}
