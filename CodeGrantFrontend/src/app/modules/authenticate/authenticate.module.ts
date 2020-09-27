import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { AuthenticateRoutingModule } from './authenticate-routing.module';
import { LoginComponent } from './login/login.component';
import { AuthorizeComponent } from './authorize/authorize.component';

@NgModule({
    declarations: [
        LoginComponent,
        AuthorizeComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        AuthenticateRoutingModule
    ]
})
export class AuthenticateModule { }
