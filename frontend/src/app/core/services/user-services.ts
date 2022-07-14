import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class UserServices {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  public getUsers(): Observable<User[]> {
    return this.http.get<any>(`${this.apiServerUrl}/api/user`);
  }

  public addUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiServerUrl}/api/user/signup`, user);
  }

  public loginUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiServerUrl}/api/user/login`, user);
  }

  public logoutUser(user: User): Observable<User> {
    return this.http.get<any>(`${this.apiServerUrl}/api/user/logout`);
  }
}
// public updateUser(user: User, userId: number): Observable<User> {
//   return this.http.put<User>(`${this.apiServerUrl}/api/user/${userId}`, user);
// }

// public deleteUser(userId: number): Observable<void> {
//   return this.http.delete<void>(`${this.apiServerUrl}/api/user/${userId}`);
// }
