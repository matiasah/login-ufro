import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(environment.api + '/usuarios');
  }

  getUser(userId: string): Observable<User> {
    return this.http.get<User>(environment.api + '/usuarios/' + userId);
  }
  storeUser(data): Observable<any> {
    return this.http.post<any>(environment.api + '/usuarios', data);
  }
  updateUser(userId: string, data): Observable<any>  {
    return this.http.put<any>(environment.api + '/usuarios/' + userId, data);
  }
  deleteUser(userId: string): Observable<any>  {
    return this.http.delete<any>(environment.api + '/usuarios/' + userId);
  }
}
