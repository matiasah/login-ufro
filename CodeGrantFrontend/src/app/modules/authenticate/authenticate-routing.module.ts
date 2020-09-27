import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizeComponent } from './authorize/authorize.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'oauth/authorize',
        redirectTo: 'oauth/confirm_access',
        pathMatch: 'full'
    },
    {
        path: 'oauth/confirm_access',
        component: AuthorizeComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthenticateRoutingModule { }
