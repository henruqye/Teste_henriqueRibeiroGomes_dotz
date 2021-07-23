import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Rotas } from '../../core/enums/rotas.enum';
import { PaginaInicialComponent } from './pagina-inicial.component';
import { PaginaInicialResolverService } from './pagina-inicial.resolver.service';

const routes: Routes = [
  {
    path: '',
    data: {
          rotaPrincipal: Rotas.PAGINAINICIAL.looby
    },
    component: PaginaInicialComponent,
      resolve: {
        dadosLogon: PaginaInicialResolverService
      }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [PaginaInicialResolverService]
})
export class PaginaInicialRoutingModule { }
