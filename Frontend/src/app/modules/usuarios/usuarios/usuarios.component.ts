import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Paginator } from 'src/app/util/paginator';
import { CrearUsuarioComponent } from '../crear-usuario/crear-usuario.component';
import { EditarUsuarioComponent } from '../editar-usuario/editar-usuario.component';
import { EliminarUsuarioComponent } from '../eliminar-usuario/eliminar-usuario.component';

@Component({
    selector: 'app-usuarios',
    templateUrl: './usuarios.component.html',
    styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit, OnDestroy {

    // Columnas de datatable
    public displayedColumns: string[] = [
        'id',
        'givenName',
        'familyName',
        'username',
        'opciones'
    ];

    // Paginación
    public paginator: Paginator<Usuario>;

    // Data-source
    public dataSource: MatTableDataSource<Usuario> = new MatTableDataSource();

    // Indicar si se encuentra cargando resultados
    public isLoading: Observable<boolean>;

    // Sort
    @ViewChild(MatSort, { static: true })
    public matSort: MatSort;

    // Paginación
    @ViewChild(MatPaginator, { static: true })
    public matPaginator: MatPaginator;

    public constructor(
        private usuarioService: UsuarioService,
        private dialog: MatDialog
    ) {
        // Instanciar paginador
        this.paginator = this.usuarioService.paginator();

        // Observables
        this.isLoading = this.paginator.isLoadingSubject;
    }

    public ngOnInit(): void {
        this.paginator.init(this.dataSource, this.matPaginator, this.matSort);
    }

    public ngOnDestroy(): void {
        this.paginator.complete();
    }

    public registrar(): void {
        // Abrir dialogo
        const ref: MatDialogRef<CrearUsuarioComponent> = this.dialog.open(CrearUsuarioComponent, {
            width: '1000px'
        });

        // Al cerrar dialogo
        ref.afterClosed().subscribe(
            response => {
                // Actualizar paginador
                this.paginator.update();
            }
        );
    }

    public editar(usuario: Usuario): void {
        // Crear dialogo
        const ref: MatDialogRef<EditarUsuarioComponent> = this.dialog.open(EditarUsuarioComponent, {
            width: '1000px',
            data: usuario
        });

        // Al cerrar dialogo
        ref.afterClosed().subscribe(
            response => {
                // Actualizar paginador
                this.paginator.update();
            }
        );
    }

    public eliminar(usuario: Usuario): void {
        // Crear dialogo
        const ref: MatDialogRef<EliminarUsuarioComponent> = this.dialog.open(EliminarUsuarioComponent, {
            width: '1000px',
            data: usuario
        });

        // Al cerrar dialogo
        ref.afterClosed().subscribe(
            response => {
                // Actualizar paginador
                this.paginator.update();
            }
        );
    }

}
