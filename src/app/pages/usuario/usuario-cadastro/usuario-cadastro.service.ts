import { InformacoesLogon } from './../../../core/entities/informacoes-logon';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pessoa } from '../../../core/entities/pessoa';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioCadastroService {
  
  private url = environment.API_URL_CADASTRO_USUARIO;

  constructor(
    private http: HttpClient
  ) { }

  public salvarPessoa(pessoa: Pessoa): Observable<Pessoa> {
    if (pessoa.id)
          return this.http.put<Pessoa>(`${this.url}/Pessoa`, pessoa);
        return this.http.post<Pessoa>(`${this.url}/Pessoa`, pessoa);
  }
  
  public salvarInformacoesLogon(informacoesLogon: InformacoesLogon): Observable<InformacoesLogon> {
    if (informacoesLogon.id)
          return this.http.put<InformacoesLogon>(`${this.url}/InformacoesLogon`, informacoesLogon);
        return this.http.post<InformacoesLogon>(`${this.url}/InformacoesLogon`, informacoesLogon);
  }

}
