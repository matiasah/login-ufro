import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
    selector: 'app-editar-usuario',
    templateUrl: './editar-usuario.component.html',
    styleUrls: ['./editar-usuario.component.scss']
})
export class EditarUsuarioComponent implements OnInit {

    // Indicar si se encuentra editando
    public editando: boolean = false;

    // Formulario
    @ViewChild('form', { static: true })
    public form: NgForm;

    public constructor(
        private dialogRef: MatDialogRef<EditarUsuarioComponent>,
        private snackBar: MatSnackBar,
        private usuarioService: UsuarioService,
        @Inject(MAT_DIALOG_DATA) public usuario: Usuario
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
            this.usuarioService.update(this.usuario).subscribe(
                () => {
                    // Indicar que no se encuentra registrando
                    this.editando = false;

                    // Notificar registro exitoso
                    this.snackBar.open('El usuario ha sido actualizado', 'Aceptar', { duration: 2000 });

                    // Cerrar modal
                    this.dialogRef.close();
                },
                () => {
                    // Indicar que no se encuentra registrando
                    this.editando = false;

                    // Notificar registro erroneo
                    this.snackBar.open('No se ha podido actualizar el usuario', 'Aceptar', { duration: 4000 });

                    // Cerrar modal
                    this.dialogRef.close();
                }
            );
        }
    }

}
