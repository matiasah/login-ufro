import { NgModule } from '@angular/core';
import {AdminRoutingModule} from './admin-routing.module';
import { UsersComponent } from './users/users.component';
import { UpsertUserComponent } from './users/upsert-user/upsert-user.component';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
  UsersComponent,
  UpsertUserComponent],
  imports: [
    AdminRoutingModule,
    CommonModule,
    ReactiveFormsModule,
  ]
})
export class AdminModule { }
