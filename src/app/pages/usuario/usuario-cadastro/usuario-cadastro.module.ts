import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UsuarioCadastroRoutingModule } from './usuario-cadastro-routing.module';
import { UsuarioCadastroComponent } from './usuario-cadastro.component';

@NgModule({
  declarations: [UsuarioCadastroComponent],
  imports: [
    CommonModule,
    
    UsuarioCadastroRoutingModule
  ]
})

export class UsuarioCadastroModule { }
