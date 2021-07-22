import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Pessoa } from '../core/entities';
import { Observable } from 'rxjs';
import { InformacoesLogon } from '../core/entities/informacoes-logon';

@Injectable({
  providedIn: 'root'
})
export class InformacoesLogonService {
    
    private url = environment.API_URL_CADASTRO_USUARIO + "InformacoesLogon";
    
    constructor(private http: HttpClient) { }

    public salvar(informacoesLogon: InformacoesLogon): Observable<InformacoesLogon> {
        if (informacoesLogon.id)
          return this.http.put<InformacoesLogon>(this.url, informacoesLogon);
        return this.http.post<InformacoesLogon>(this.url, informacoesLogon);
      }
    
}
