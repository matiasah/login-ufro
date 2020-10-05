import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { CrearOAuth2ClientComponent } from './crear-oauth2-client/crear-oauth2-client.component';
import { EditarOAuth2ClientComponent } from './editar-oauth2-client/editar-oauth2-client.component';
import { EliminarOAuth2ClientComponent } from './eliminar-oauth2-client/eliminar-oauth2-client.component';
import { OAuth2ClientsRoutingModule } from './oauth2-clients-routing.module';
import { Oauth2ClientsComponent } from './oauth2-clients/oauth2-clients.component';

@NgModule({
    declarations: [
        Oauth2ClientsComponent,
        CrearOAuth2ClientComponent,
        EditarOAuth2ClientComponent,
        EliminarOAuth2ClientComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        OAuth2ClientsRoutingModule
    ]
})
export class OAuth2ClientsModule { }
