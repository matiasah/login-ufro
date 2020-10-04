import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
    selector: 'app-crear-usuario',
    templateUrl: './crear-usuario.component.html',
    styleUrls: ['./crear-usuario.component.scss']
})
export class CrearUsuarioComponent implements OnInit {

    // Registro a crear
    public usuario: Usuario = {
        username: '',
        password: ''
    };

    // Indicar si se encuentra registrando
    public registrando: boolean = false;

    // Formulario
    @ViewChild('form', { static: true })
    public form: NgForm;

    public constructor(
        private dialogRef: MatDialogRef<CrearUsuarioComponent>,
        private snackBar: MatSnackBar,
        private usuarioService: UsuarioService
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
            this.usuarioService.save(this.usuario).subscribe(
                () => {
                    // Indicar que no se encuentra registrando
                    this.registrando = false;

                    // Notificar registro exitoso
                    this.snackBar.open('El usuario ha sido registrado', 'Aceptar', { duration: 2000 });

                    // Cerrar modal
                    this.dialogRef.close();
                },
                () => {
                    // Indicar que no se encuentra registrando
                    this.registrando = false;

                    // Notificar registro erroneo
                    this.snackBar.open('No se ha podido registrar el usuario', 'Aceptar', { duration: 4000 });

                    // Cerrar modal
                    this.dialogRef.close();
                }
            );
        }
    }

}
