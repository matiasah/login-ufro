import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { SystemRoutingModule } from './system-routing.module';
import { SystemComponent } from './system.component';

@NgModule({
    declarations: [
        SystemComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        SystemRoutingModule
    ]
})
export class SystemModule { }
