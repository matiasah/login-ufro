import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

/**
 * @author Matías Hermosilla
 */
@Injectable({
    providedIn: 'root'
})
export class SystemGuard implements CanActivate {

    public constructor(
        private authService: AuthService,
        private router: Router
    ) {

    }

    public canActivate(): boolean {
        if (!this.authService.tokenEsValido()) {
            // Navegar a login
            this.router.navigate(['/']);

            // Retornar falso
            return false;
        }

        // Retornar verdadero
        return true;
    }

}
