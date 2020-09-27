import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ClientInfo } from '../interfaces/client-info';

@Injectable({
    providedIn: 'root'
})
export class ClientService {

    public constructor(
        private http: HttpClient
    ) {

    }

    public getClientInfo(): Observable<ClientInfo> {
        return this.http.get<ClientInfo>(`${environment.host}/oauth/confirm_access/client`, { withCredentials: true });
    }

}
