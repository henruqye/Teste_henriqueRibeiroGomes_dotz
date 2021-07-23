import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Data } from '@angular/router';
import { Pessoa } from '../../core/entities/pessoa';
import { Rotas } from '../../core/enums/rotas.enum';

@Component({
  selector: 'app-pagina-inicial',
  templateUrl: './pagina-inicial.component.html',
  styleUrls: ['./pagina-inicial.component.scss'],
})
export class PaginaInicialComponent implements OnInit {
  public dadosUsuarioLogon = new Pessoa();

  constructor(private roteador: Router, private rota: ActivatedRoute) {}

  ngOnInit(): void {
    this.obtemDadosUsuarioLogon();
  }

  private obtemDadosUsuarioLogon(): void {
    const data: Data = this.rota.snapshot.data;
    this.dadosUsuarioLogon = data.dadosLogon;
    if (!this.dadosUsuarioLogon) {
      this.roteador.navigate([Rotas.LOGIN.formulario]);
    }
  }
}
