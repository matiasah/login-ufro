import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Usuario } from 'src/app/interfaces/usuario';
import { AuthService } from 'src/app/services/auth.service';

@Component({
    selector: 'app-system',
    templateUrl: './system.component.html',
    styleUrls: ['./system.component.scss']
})
export class SystemComponent implements OnInit, OnDestroy {

    // Usuario
    public usuario: Usuario;

    // Suscripción a usuario
    public usuarioSubscription: Subscription;

    public constructor(
        private authService: AuthService,
        private router: Router
    ) {

    }

    public ngOnInit(): void {
        // Obtener usuario
        this.usuarioSubscription = this.authService.getUsuario().subscribe(
            usuario => this.usuario = usuario
        );
    }

    public ngOnDestroy(): void {
        // Eliminar subscripción
        this.usuarioSubscription.unsubscribe();
    }

    public onLogout(): void {
        // Eliminar token
        this.authService.removeToken();

        // Navegar a login
        this.router.navigate(['/']);
    }

}
