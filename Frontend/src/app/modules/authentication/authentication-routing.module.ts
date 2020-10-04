import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInGuard } from 'src/app/guards/sign-in.guard';
import { SignInComponent } from './sign-in/sign-in.component';

const routes: Routes = [
    {
        path: 'sign-in',
        component: SignInComponent,
        canActivate: [SignInGuard]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
