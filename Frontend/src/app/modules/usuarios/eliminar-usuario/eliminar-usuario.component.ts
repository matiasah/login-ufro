import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
    selector: 'app-eliminar-usuario',
    templateUrl: './eliminar-usuario.component.html',
    styleUrls: ['./eliminar-usuario.component.scss']
})
export class EliminarUsuarioComponent implements OnInit {

    // Indicar si se encuentra eliminando
    public eliminando: boolean = false;

    public constructor(
        private dialogRef: MatDialogRef<EliminarUsuarioComponent>,
        private snackBar: MatSnackBar,
        private usuarioService: UsuarioService,
        @Inject(MAT_DIALOG_DATA) public usuario: Usuario
    ) {

    }

    public ngOnInit(): void {

    }

    public onSubmit(): void {
        // Indicar que se encuentra eliminando
        this.eliminando = true;

        // Eliminar
        this.usuarioService.delete(this.usuario).subscribe(
            () => {
                // Indicar que no se encuentra registrando
                this.eliminando = false;

                // Notificar registro exitoso
                this.snackBar.open('El usuario ha sido eliminado', 'Aceptar', { duration: 2000 });

                // Cerrar modal
                this.dialogRef.close();
            },
            () => {
                // Indicar que no se encuentra registrando
                this.eliminando = false;

                // Notificar registro erroneo
                this.snackBar.open('No se ha podido eliminar el usuario', 'Aceptar', { duration: 2000 });

                // Cerrar modal
                this.dialogRef.close();
            }
        );
    }


}
