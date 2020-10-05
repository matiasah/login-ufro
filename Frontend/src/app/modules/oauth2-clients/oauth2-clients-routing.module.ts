import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Oauth2ClientsComponent } from './oauth2-clients/oauth2-clients.component';

const routes: Routes = [
    {
        path: '',
        component: Oauth2ClientsComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OAuth2ClientsRoutingModule { }
