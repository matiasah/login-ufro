import {HttpClient, HttpHeaders, HttpRequest} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { Observable, of, throwError } from 'rxjs';
import {delay, tap} from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { UserMocks } from 'src/mocks/user-mocks';
import { User } from '../models/user';
import {UserRole} from '../models/user-role.enum';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {
    authenticatedUser: User;
    constructor(private localStorage: LocalStorageService, private http: HttpClient) { }

    login(email: string, password: string): Observable<User> {
        const user = UserMocks.find(u => u.username === email && u.password === password);
        if (user != null) {
            this.authenticatedUser = user;
            this.localStorage.store('authenticatedUser', user);
            return of(user).pipe(delay(3000));
        } else {
            return throwError('Usuario o contraseña inválidos');
        }

        // Formulario con datos de usuario
    }

    loginOauth(email: string, password: string): Observable<User> {
        const form: FormData = new FormData();
        form.set('grant_type', 'password');
        form.set('username', email);
        form.set('password', password);
        // Enviar petición
        return this.http.post<User>(environment.api + '/oauth/token', form, { headers: {
            Authorization: 'Basic ' + window.btoa('frontend:frontend')
        }});
    }

    isLoggedIn(): boolean {
        this.getUserInstance();
        return this.authenticatedUser != null;
    }
    isAdmin(): boolean {
      return this.isLoggedIn() && this.authenticatedUser.authorities.indexOf(UserRole.ROLE_ADMIN) !== -1;
    }
    getLoggedUser(): User {
        if (this.isLoggedIn()) {
            return this.authenticatedUser;
        } else {
            return null;
        }
    }
    logout(): void {
        this.authenticatedUser = null;
        this.localStorage.clear('authenticatedUser');
    }
    getUserInstance(): void {
        this.authenticatedUser = this.localStorage.retrieve('authenticatedUser');
    }
}
