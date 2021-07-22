import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Pessoa } from '../core/entities';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {
    
    private url = environment.API_URL_CADASTRO_USUARIO + "Pessoa";
    
    constructor(private http: HttpClient) { }

    public salvar(pessoa: Pessoa): Observable<Pessoa> {
        if (pessoa.id)
          return this.http.put<Pessoa>(this.url, pessoa);
        return this.http.post<Pessoa>(this.url, pessoa);
      }
    
}
