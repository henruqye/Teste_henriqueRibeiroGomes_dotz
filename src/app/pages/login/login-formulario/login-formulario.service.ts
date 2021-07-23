import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { InformacoesLogon } from '../../../core/entities/informacoes-logon';

@Injectable({
  providedIn: 'root'
})
export class LoginFormularioService {

  private url = environment.API_URL_CADASTRO_USUARIO;

  constructor(
    private http: HttpClient
  ) { }

  public async  obtemInformacoesLogon(email: string): Promise<InformacoesLogon> {
    const params = new HttpParams()
      .append('email', email.toString());

    return await this.http.get<InformacoesLogon>(`${this.url}/InformacoesLogon`, { params }).toPromise();
  }

}
