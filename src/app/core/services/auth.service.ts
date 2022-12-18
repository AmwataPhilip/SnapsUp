import { Injectable, Optional } from '@angular/core';
import {
  Auth,
  authState,
  signInAnonymously,
  signOut,
  User,
  GoogleAuthProvider,
  signInWithPopup,
} from '@angular/fire/auth';
import { EMPTY, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { traceUntilFirst } from '@angular/fire/performance';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public readonly user: Observable<User | null> = EMPTY;
  public isLoggedIn: boolean = false;

  constructor(@Optional() private auth: Auth) {
    if (auth) {
      this.user = authState(this.auth);
      authState(this.auth)
        .pipe(
          traceUntilFirst('auth'),
          map((user) => !!user)
        )
        .subscribe((isLoggedIn) => {
          this.isLoggedIn = isLoggedIn;
        });
    }
  }

  async signInWithGoogle() {
    return await signInWithPopup(this.auth, new GoogleAuthProvider());
  }

  async signInAnonymously() {
    return await signInAnonymously(this.auth);
  }

  async logout() {
    return await signOut(this.auth);
  }
}
