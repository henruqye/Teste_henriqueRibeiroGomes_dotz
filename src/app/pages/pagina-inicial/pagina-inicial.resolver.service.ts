import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Pessoa } from '../../core/entities/pessoa';
import { PaginaInicialService } from './pagina-inicial.service';

@Injectable({
  providedIn: 'root'
})
export class PaginaInicialResolverService implements Resolve<Observable<Pessoa>> {
  
  private pessoa: Pessoa;
  constructor(private service: PaginaInicialService) {
    this.pessoa = new Pessoa();
  }
  resolve(route: ActivatedRouteSnapshot): Observable<Pessoa> {
    const id: number = +route.queryParamMap.get('id');
    if(!id)
      return;
    
    return this.service.obtemInformacoesUsuario(id);
  }
}
