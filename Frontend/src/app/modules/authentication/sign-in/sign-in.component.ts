import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario';
import { AuthService } from 'src/app/services/auth.service';

@Component({
    selector: 'app-sign-in',
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

    // Usuario que va a iniciar sesión
    public usuario: Usuario = {} as Usuario;

    // Formulario
    @ViewChild('form', { static: true })
    public form: NgForm;

    // Indicar si se encuentra ingresando al sistema
    public ingresando: boolean = false;

    // Indicar si el usuario o contraseña son incorrectos
    public incorrecto: boolean = false;

    public constructor(
        private authService: AuthService,
        private router: Router
    ) {

    }

    public ngOnInit(): void {

    }

    public onSubmit(): void {
        // Si el formulario es válido
        if (this.form.valid) {

            // Indicar que se encuentra iniciando sesión
            this.ingresando = true;

            // Indicar que usuario o contraseña no son incorrectos
            this.incorrecto = false;

            // Iniciar sesión
            this.authService.login(this.usuario).subscribe(
                () => {
                    // Indicar que no se encuentra iniciando sesión
                    this.ingresando = false;

                    // Enviar a sistema
                    this.router.navigate(['system']);
                },
                () => {
                    // Indicar que no se encuentra iniciando sesión
                    this.ingresando = false;

                    // Indicar que usuario o contraseña son incorrectos
                    this.incorrecto = true;
                }
            );
        }
    }

}
