import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://your-fastapi-backend-url';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/user/`);
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/user/`, user);
  }

  getUser(username: string): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/user/${username}`);
  }

  updateUser(username: string, user: User): Observable<any> {
    return this.http.put(`${this.apiUrl}/user/${username}`, user);
  }

  deleteUser(username: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/user/${username}`);
  }
}
