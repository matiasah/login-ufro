import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { OAuth2Client } from '../interfaces/oauth2-client';
import { Paginator } from '../util/paginator';

@Injectable({
    providedIn: 'root'
})
export class OAuth2ClientService {

    public constructor(
        private http: HttpClient
    ) {

    }

    public getDTO(oauth2Client: OAuth2Client): OAuth2Client {
        // DTO
        return Object.assign({}, oauth2Client);
    }

    public paginator(): Paginator<OAuth2Client> {
        return new Paginator(this.http, `${environment.host}/oauth2-clients/page`);
    }

    public findAll(): Observable<OAuth2Client[]> {
        return this.http.get<OAuth2Client[]>(`${environment.host}/oauth2-clients`);
    }

    public findById(id: number): Observable<OAuth2Client> {
        return this.http.get<OAuth2Client>(`${environment.host}/oauth2-clients/${id}`);
    }

    public save(oauth2Client: OAuth2Client): Observable<OAuth2Client> {
        return this.http.post<OAuth2Client>(`${environment.host}/oauth2-clients`, this.getDTO(oauth2Client));
    }

    public update(oauth2Client: OAuth2Client): Observable<OAuth2Client> {
        return this.http.patch<OAuth2Client>(`${environment.host}/oauth2-clients/${oauth2Client.id}`, this.getDTO(oauth2Client));
    }

    public delete(oauth2Client: OAuth2Client): Observable<any> {
        return this.http.delete<OAuth2Client>(`${environment.host}/oauth2-clients/${oauth2Client.id}`);
    }

}
