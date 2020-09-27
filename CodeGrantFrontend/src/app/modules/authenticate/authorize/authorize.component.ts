import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ClientInfo } from 'src/app/interfaces/client-info';
import { ClientService } from 'src/app/services/client.service';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-authorize',
    templateUrl: './authorize.component.html',
    styleUrls: ['./authorize.component.scss']
})
export class AuthorizeComponent implements OnInit, AfterViewInit {

    // Información sobre el cliente
    public clientInfo: ClientInfo;
    public authorizeUrl: string = `${environment.host}/oauth/authorize`;

    public constructor(
        private clientService: ClientService
    ) { }

    public ngOnInit(): void {

    }

    public ngAfterViewInit(): void {
        // Obtener información del cliente
        this.clientService.getClientInfo().subscribe(
            clientInfo => {

                // Copiar información
                this.clientInfo = clientInfo;
            }
        );
    }

}
