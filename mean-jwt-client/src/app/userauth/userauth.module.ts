import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { UserAuthRoutingModule } from './userauth-routing.module';
import { LayoutComponent, LoginComponent, ProfileComponent, RegisterComponent } from './components';


@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        UserAuthRoutingModule
    ],
    declarations: [
        LayoutComponent,
        LoginComponent,
        ProfileComponent,
        RegisterComponent
    ]
})
export class UserAuthModule { }
