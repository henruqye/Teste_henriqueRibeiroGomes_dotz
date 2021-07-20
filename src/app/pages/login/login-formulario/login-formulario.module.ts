import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormularioRoutingModule } from './login-formulario-routing.module';
import { LoginFormularioComponent } from './login-formulario.component';

@NgModule({
  declarations: [LoginFormularioComponent],
  imports: [
    CommonModule,

    LoginFormularioRoutingModule
  ]
})
export class LoginFormularioModule { }
