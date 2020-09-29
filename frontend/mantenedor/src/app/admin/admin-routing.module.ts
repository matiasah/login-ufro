import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UsersComponent} from './users/users.component';
import {UpsertUserComponent} from './users/upsert-user/upsert-user.component';

const routes: Routes = [
    {
      path: '',
      component: UsersComponent,
    },
    {
      path: 'users',
      component: UsersComponent,
    },
    {
      path: 'users/store',
      component: UpsertUserComponent,
    },
    {
      path: 'users/update/:userId',
      component: UpsertUserComponent,
    },
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}

