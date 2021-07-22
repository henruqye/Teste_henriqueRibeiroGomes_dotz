import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Rotas } from '../../../core/enums/rotas.enum';
import { LoginFormularioComponent } from './login-formulario.component';

const routes: Routes = [
	{
		path: '',
		data: {
      rotaPrincipal: Rotas.LOGIN.formulario

		},
		component: LoginFormularioComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})

export class LoginFormularioRoutingModule { }
