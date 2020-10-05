import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { OAuth2Client } from 'src/app/interfaces/oauth2-client';
import { OAuth2ClientService } from 'src/app/services/oauth2-client.service';

@Component({
    selector: 'app-editar-oauth2-client',
    templateUrl: './editar-oauth2-client.component.html',
    styleUrls: ['./editar-oauth2-client.component.scss']
})
export class EditarOAuth2ClientComponent implements OnInit {

    // Indicar si se encuentra editando
    public editando: boolean = false;

    // Formulario
    @ViewChild('form', { static: true })
    public form: NgForm;

    public constructor(
        private dialogRef: MatDialogRef<EditarOAuth2ClientComponent>,
        private snackBar: MatSnackBar,
        private oauth2ClientService: OAuth2ClientService,
        @Inject(MAT_DIALOG_DATA) public oauth2Client: OAuth2Client
    ) {

    }

    public ngOnInit(): void {

    }

    public onSubmit(): void {
        // Si el formulario es válido
        if (this.form.valid) {
            // Indicar que se encuentra registrando
            this.editando = true;

            // Registrar
            this.oauth2ClientService.update(this.oauth2Client).subscribe(
                () => {
                    // Indicar que no se encuentra registrando
                    this.editando = false;

                    // Notificar registro exitoso
                    this.snackBar.open('La credencial ha sido actualizada', 'Aceptar', { duration: 2000 });

                    // Cerrar modal
                    this.dialogRef.close();
                },
                () => {
                    // Indicar que no se encuentra registrando
                    this.editando = false;

                    // Notificar registro erroneo
                    this.snackBar.open('No se ha podido actualizar la credencial', 'Aceptar', { duration: 4000 });

                    // Cerrar modal
                    this.dialogRef.close();
                }
            );
        }
    }

}
