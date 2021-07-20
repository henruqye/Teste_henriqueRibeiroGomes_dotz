import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Rotas } from './core/enums/rotas.enum';

const routes: Routes = [
  {
    path: 'login',
    children: [
      {
        path: '',
        loadChildren: () =>
          import(
            './pages/login/login-formulario/login-formulario.module'
          ).then((m) => m.LoginFormularioModule)

      }
    ]
  },
  {
    path: 'usuario',
    children: [
      {
        path: 'formulario',
        loadChildren: () =>
          import(
            './pages/usuario/usuario-cadastro/usuario-cadastro.module'
          ).then((m) => m.UsuarioCadastroModule)
      }
    ]
  },
  {
		path: '**',
		redirectTo: Rotas.LOGIN.formulario,
		pathMatch: 'full'
	  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
