import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { OAuth2Client } from 'src/app/interfaces/oauth2-client';
import { OAuth2ClientService } from 'src/app/services/oauth2-client.service';
import { Paginator } from 'src/app/util/paginator';
import { CrearOAuth2ClientComponent } from '../crear-oauth2-client/crear-oauth2-client.component';
import { EditarOAuth2ClientComponent } from '../editar-oauth2-client/editar-oauth2-client.component';
import { EliminarOAuth2ClientComponent } from '../eliminar-oauth2-client/eliminar-oauth2-client.component';

@Component({
    selector: 'app-oauth2-clients',
    templateUrl: './oauth2-clients.component.html',
    styleUrls: ['./oauth2-clients.component.scss']
})
export class Oauth2ClientsComponent implements OnInit, OnDestroy {

    // Columnas de datatable
    public displayedColumns: string[] = [
        'id',
        'nombre',
        'clientId',
        'opciones'
    ];

    // Paginación
    public paginator: Paginator<OAuth2Client>;

    // Data-source
    public dataSource: MatTableDataSource<OAuth2Client> = new MatTableDataSource();

    // Indicar si se encuentra cargando resultados
    public isLoading: Observable<boolean>;

    // Sort
    @ViewChild(MatSort, { static: true })
    public matSort: MatSort;

    // Paginación
    @ViewChild(MatPaginator, { static: true })
    public matPaginator: MatPaginator;

    public constructor(
        private oauth2ClientService: OAuth2ClientService,
        private dialog: MatDialog
    ) {
        // Instanciar paginador
        this.paginator = this.oauth2ClientService.paginator();

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
        const ref: MatDialogRef<CrearOAuth2ClientComponent> = this.dialog.open(CrearOAuth2ClientComponent, {
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

    public editar(oauth2Client: OAuth2Client): void {
        // Crear dialogo
        const ref: MatDialogRef<EditarOAuth2ClientComponent> = this.dialog.open(EditarOAuth2ClientComponent, {
            width: '1000px',
            data: oauth2Client
        });

        // Al cerrar dialogo
        ref.afterClosed().subscribe(
            response => {
                // Actualizar paginador
                this.paginator.update();
            }
        );
    }

    public eliminar(oauth2Client: OAuth2Client): void {
        // Crear dialogo
        const ref: MatDialogRef<EliminarOAuth2ClientComponent> = this.dialog.open(EliminarOAuth2ClientComponent, {
            width: '1000px',
            data: oauth2Client
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
