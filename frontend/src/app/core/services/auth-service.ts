import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';

export interface LoginResponse {
  user: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private readonly http: HttpClient,
    private readonly router: Router
  ) {}

  login(email: string, password: string): Observable<LoginResponse> {
    return this.http
      .post<LoginResponse>('http://localhost:3000/api/user/login', {
        email,
        password,
      })
      .pipe(
        tap((response) => {
          console.log('set token', response);
          this.setToken(response.user);
        })
      );
  }

  isLoggedIn() {
    const token = localStorage.getItem('session');
    return token !== null;
  }

  setToken(token: string): void {
    localStorage.setItem('session', token);
  }

  getToken(): void | string {
    if (!this.isLoggedIn()) {
      this.logout();
      return;
    }

    const token = localStorage.getItem('session');

    return token!;
  }

  logout() {
    localStorage.clear();
    this.router.navigateByUrl('/auth/login');
  }
}
