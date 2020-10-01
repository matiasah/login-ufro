import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';


@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        DashboardComponent,
        AdminComponent
    ],
    imports: [
        FormsModule,
        HttpClientModule,
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        ReactiveFormsModule,
        NgxWebstorageModule.forRoot(),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
