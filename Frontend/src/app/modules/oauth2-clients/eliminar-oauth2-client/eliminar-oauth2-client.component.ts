import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { OAuth2Client } from 'src/app/interfaces/oauth2-client';
import { OAuth2ClientService } from 'src/app/services/oauth2-client.service';

@Component({
    selector: 'app-eliminar-oauth2-client',
    templateUrl: './eliminar-oauth2-client.component.html',
    styleUrls: ['./eliminar-oauth2-client.component.scss']
})
export class EliminarOAuth2ClientComponent implements OnInit {

    // Indicar si se encuentra eliminando
    public eliminando: boolean = false;

    public constructor(
        private dialogRef: MatDialogRef<EliminarOAuth2ClientComponent>,
        private snackBar: MatSnackBar,
        private oauth2ClientService: OAuth2ClientService,
        @Inject(MAT_DIALOG_DATA) public oauth2Client: OAuth2Client
    ) {

    }

    public ngOnInit(): void {

    }

    public onSubmit(): void {
        // Indicar que se encuentra eliminando
        this.eliminando = true;

        // Eliminar
        this.oauth2ClientService.delete(this.oauth2Client).subscribe(
            () => {
                // Indicar que no se encuentra registrando
                this.eliminando = false;

                // Notificar registro exitoso
                this.snackBar.open('La credencial ha sido eliminada', 'Aceptar', { duration: 2000 });

                // Cerrar modal
                this.dialogRef.close();
            },
            () => {
                // Indicar que no se encuentra registrando
                this.eliminando = false;

                // Notificar registro erroneo
                this.snackBar.open('No se ha podido eliminar la credencial', 'Aceptar', { duration: 2000 });

                // Cerrar modal
                this.dialogRef.close();
            }
        );
    }

}
