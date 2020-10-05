import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { OAuth2Client } from 'src/app/interfaces/oauth2-client';
import { OAuth2ClientService } from 'src/app/services/oauth2-client.service';

@Component({
    selector: 'app-crear-oauth2-client',
    templateUrl: './crear-oauth2-client.component.html',
    styleUrls: ['./crear-oauth2-client.component.scss']
})
export class CrearOAuth2ClientComponent implements OnInit {

    // Registro a crear
    public oauth2Client: OAuth2Client = {
        nombre: '',
        clientId: '',
        clientSecret: ''
    };

    // Indicar si se encuentra registrando
    public registrando: boolean = false;

    // Formulario
    @ViewChild('form', { static: true })
    public form: NgForm;

    public constructor(
        private dialogRef: MatDialogRef<CrearOAuth2ClientComponent>,
        private snackBar: MatSnackBar,
        private oauth2ClientService: OAuth2ClientService
    ) {

    }

    public ngOnInit(): void {

    }

    public onSubmit(): void {
        // Si el formulario es válido
        if (this.form.valid) {
            // Indicar que se encuentra registrando
            this.registrando = true;

            // Registrar
            this.oauth2ClientService.save(this.oauth2Client).subscribe(
                () => {
                    // Indicar que no se encuentra registrando
                    this.registrando = false;

                    // Notificar registro exitoso
                    this.snackBar.open('La credencial ha sido registrada', 'Aceptar', { duration: 2000 });

                    // Cerrar modal
                    this.dialogRef.close();
                },
                () => {
                    // Indicar que no se encuentra registrando
                    this.registrando = false;

                    // Notificar registro erroneo
                    this.snackBar.open('No se ha podido registrar la credencial', 'Aceptar', { duration: 4000 });

                    // Cerrar modal
                    this.dialogRef.close();
                }
            );
        }
    }

}
