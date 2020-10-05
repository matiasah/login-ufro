import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Paginator } from 'src/app/util/paginator';
import { environment } from 'src/environments/environment';
import { Usuario } from '../interfaces/usuario';

@Injectable({
    providedIn: 'root'
})
export class UsuarioService {

    public constructor(
        private http: HttpClient
    ) {

    }

    public getDTO(usuario: Usuario): Usuario {
        // DTO
        return Object.assign({}, usuario);
    }

    public paginator(): Paginator<Usuario> {
        return new Paginator(this.http, `${environment.host}/usuarios/page`);
    }

    public findAll(): Observable<Usuario[]> {
        return this.http.get<Usuario[]>(`${environment.host}/usuarios`);
    }

    public findById(id: number): Observable<Usuario> {
        return this.http.get<Usuario>(`${environment.host}/usuarios/${id}`);
    }

    public save(usuario: Usuario): Observable<Usuario> {
        return this.http.post<Usuario>(`${environment.host}/usuarios`, this.getDTO(usuario));
    }

    public update(usuario: Usuario): Observable<Usuario> {
        return this.http.patch<Usuario>(`${environment.host}/usuarios/${usuario.id}`, this.getDTO(usuario));
    }

    public delete(usuario: Usuario): Observable<any> {
        return this.http.delete<Usuario>(`${environment.host}/casos-uso/${usuario.id}`);
    }

}
