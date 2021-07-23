import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormularioRoutingModule } from './login-formulario-routing.module';
import { LoginFormularioComponent } from './login-formulario.component';
import { CardModule } from 'primeng-lts/card';
import { ReactiveFormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng-lts/password';
import { InputTextModule } from 'primeng-lts/inputtext';
import { ButtonModule } from 'primeng-lts/button';
import { ToastModule } from 'primeng-lts/toast';
@NgModule({
  declarations: [LoginFormularioComponent],
  imports: [
    CommonModule,
    CardModule,
    ReactiveFormsModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    ToastModule,
    LoginFormularioRoutingModule
  ]
})
export class LoginFormularioModule { }
