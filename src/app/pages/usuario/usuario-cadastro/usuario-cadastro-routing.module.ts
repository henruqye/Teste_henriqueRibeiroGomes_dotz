import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Rotas } from '../../../core/enums/rotas.enum';
import { UsuarioCadastroComponent } from './usuario-cadastro.component';

const routes: Routes = [
	{
		path: '',
		data: {
      rotaPrincipal: Rotas.USUARIO.cadastro

		},
		component: UsuarioCadastroComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class UsuarioCadastroRoutingModule { }
