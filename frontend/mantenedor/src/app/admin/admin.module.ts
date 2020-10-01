import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { UpsertUserComponent } from './users/upsert-user/upsert-user.component';
import { UsersComponent } from './users/users.component';

@NgModule({
    declarations: [
        UsersComponent,
        UpsertUserComponent],
    imports: [
        FormsModule, 
        AdminRoutingModule,
        CommonModule,
        ReactiveFormsModule,
    ]
})
export class AdminModule { }
