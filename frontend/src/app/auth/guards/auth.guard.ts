import { Injectable } from '@angular/core';
import {
  CanActivate,
} from '@angular/router';
import { Auth } from './auth.guard';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private auth: Auth, private router: Router) {}

  canActivate(
    route: 
    state: 
  ): boolean {
    const token = this.auth.getToken();
    if (token) {
      return true;
    } else {
      this.router.navigateByUrl('/auth/sign-up');
      return false;
    }
  }
}
