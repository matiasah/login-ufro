import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SystemGuard } from './guards/system.guard';

const routes: Routes = [
    {
        path: 'system',
        loadChildren: () => import('./modules/system/system.module').then(m => m.SystemModule),
        canActivate: [SystemGuard]
    },
    {
        path: '',
        redirectTo: 'sign-in',
        pathMatch: 'full'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
