import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { Observable, of } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedInUser: User | null = null;
  private localStorageKey = 'loggedInUser';

  constructor(private userService: UserService) {
    // Retrieve the logged-in user from local storage on service initialization
    const storedUser = localStorage.getItem(this.localStorageKey);
    this.loggedInUser = storedUser ? JSON.parse(storedUser) : null;
  }

  get isLoggedIn(): boolean {
    return !!this.loggedInUser;
  }

  login(username: string, password: string): Observable<boolean> {
    return this.userService.getUser(username).pipe(
      tap((user: User) => {
        // Check if the user exists and the password matches
        if (user && user.password === password) {
          this.loggedInUser = user;
          localStorage.setItem(this.localStorageKey, JSON.stringify(user));
        }
      }),
      catchError(() => {
        // Handle error (user not found or password doesn't match)
        return of(false);
      }),
      map(() => !!this.loggedInUser)  // Map the result to a boolean
    );
  }
  

  logout(): void {
    this.loggedInUser = null;
    localStorage.removeItem(this.localStorageKey);
  }
}
