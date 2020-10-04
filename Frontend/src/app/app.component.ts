import { Component } from '@angular/core';
import { Event as RouterEvent, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    // Indicar si se encuentra "navegando" entre rutas
    public navegando: boolean = true;

    public constructor(
        private router: Router
    ) {

        // Suscribirse a eventos de Router
        this.router.events.subscribe(
            (event: RouterEvent) => {

                // Evento recibido
                if (event instanceof NavigationStart) {
                    if (!this.navegando) {
                        // Inicio de navegación
                        this.navegando = true;
                    }
                } else if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) {
                    if (this.navegando) {
                        // Fin de navegación
                        this.navegando = false;
                    }
                }
            }
        );

    }

}
