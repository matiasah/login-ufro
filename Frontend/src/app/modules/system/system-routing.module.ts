import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SystemComponent } from './system.component';

const routes: Routes = [
    {
        path: '',
        component: SystemComponent,
        children: [
            {
                path: '',
                redirectTo: 'usuarios',
                pathMatch: 'prefix'
            },
            {
                path: 'usuarios',
                loadChildren: () => import('../usuarios/usuarios.module').then(m => m.UsuariosModule)
            },
            {
                path: 'oauth2-clients',
                loadChildren: () => import('../oauth2-clients/oauth2-clients.module').then(m => m.OAuth2ClientsModule)
            }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRoutingModule { }
