import { Injectable } from '@angular/core';
import {User} from '../../models/user';
import {UserMocks} from '../../mocks/user-mocks';
import {LocalStorageService} from 'ngx-webstorage';
import {Observable, of, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  authenticatedUser: User;
  constructor(private localStorage: LocalStorageService) {}
  login(email: string, password: string): Observable<User> {
    const user = UserMocks.find(u => u.email === email && u.password === password);
    if (user != null){
      this.authenticatedUser = user;
      this.localStorage.store('authenticatedUser', user);
      return of(user);
    } else {
      return null;
    }
  }
  isLoggedIn(): boolean {
    this.getUserInstance();
    return this.authenticatedUser != null;
  }
  getLoggedUser(): User {
    if (this.isLoggedIn()) {
      return this.authenticatedUser;
    }else{
      return null;
    }
  }
  logout(): void {
    this.authenticatedUser = null;
    this.localStorage.clear('authenticatedUser');
  }
  getUserInstance(): void{
    this.authenticatedUser = this.localStorage.retrieve('authenticatedUser');
  }
}
