import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng-lts/button';
import { CardModule } from 'primeng-lts/card';
import { InputTextModule } from 'primeng-lts/inputtext';
import { PasswordModule } from 'primeng-lts/password';
import { UsuarioCadastroRoutingModule } from './usuario-cadastro-routing.module';
import { UsuarioCadastroComponent } from './usuario-cadastro.component';
import { FieldsetModule } from 'primeng-lts/fieldset';
import { InputMaskModule } from 'primeng-lts/inputmask';
import { CalendarModule } from 'primeng-lts/calendar';
import { DropdownModule } from 'primeng-lts/dropdown';
import { ToastModule } from 'primeng-lts/toast';

@NgModule({
  declarations: [UsuarioCadastroComponent],
  imports: [
    CommonModule,
    CardModule,
    ReactiveFormsModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    FieldsetModule,
    InputMaskModule,
    CalendarModule,
    DropdownModule,
    ToastModule,
    
    UsuarioCadastroRoutingModule
  ]
})

export class UsuarioCadastroModule { }
