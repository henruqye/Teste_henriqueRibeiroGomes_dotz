import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Pessoa } from '../../core/entities/pessoa';

@Injectable({
  providedIn: 'root'
})
export class PaginaInicialService {
  
  private url = environment.API_URL_CADASTRO_USUARIO;

  constructor(
    private http: HttpClient
  ) { }

  public obtemInformacoesUsuario(id: number): Observable<Pessoa> {
    let params = new HttpParams()
      .append('id',id.toString());
    return this.http.get<Pessoa>(`${this.url}/Pessoa`, { params })
  }

}
