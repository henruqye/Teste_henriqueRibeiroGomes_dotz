import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng-lts/api';
import { Rotas } from '../../../core/enums/rotas.enum';
import { InformacoesLogon } from '../../../core/entities/informacoes-logon';
import { LoginFormularioService } from './login-formulario.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-login-formulario',
  templateUrl: './login-formulario.component.html',
  styleUrls: ['./login-formulario.component.scss'],
  providers: [ MessageService ]
})
export class LoginFormularioComponent implements OnInit {
  
  public formulario: FormGroup;
  public informacoesLogon: Subject<InformacoesLogon> = new Subject<InformacoesLogon>();

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private messageService: MessageService,
    private service: LoginFormularioService
  ) { }

  ngOnInit(): void {
    this.criaFormulario();
  }
  
  private criaFormulario(): void {
    this.formulario = this.fb.group({
      email: [null, Validators.required],
      senha: [null, Validators.required]
    })
  }

  public autenticarUsuario() {

    if (!this.formulario.valid)
      return;

    this.obtemInformacoesLogon();    
    this.informacoesLogon.subscribe((informacoesLogon) => {
      if (this.ehSenhaValida(informacoesLogon)) {

        this.router.navigate([Rotas.PAGINAINICIAL.looby], {
          queryParams: { id: informacoesLogon.pessoa },
          relativeTo: this.route.root
        })
      } else {
        
        this.messageService.add({severity:'error', summary: 'Erro', detail: 'Senha inválida!'});
      }
    });
  }
  
  private obtemInformacoesLogon(): InformacoesLogon {
    
    let _informacoesLogon = new InformacoesLogon();

    this.service.obtemInformacoesLogon(this.formulario.get('email').value).then((informacoesLogonResult) => {
      if (!_informacoesLogon) {
        this.messageService.add({severity:'error', summary: 'Erro', detail: 'E-mail não encontrado'});
        return;
      }
      _informacoesLogon = informacoesLogonResult
      this.informacoesLogon.next(_informacoesLogon);
    })
    
    return _informacoesLogon;
  }
  
  private ehSenhaValida(informacoesLogon: InformacoesLogon): boolean {
    if (this.formulario.get('senha').value == informacoesLogon[0].senha)
      return true;
    else  
      false;
  }

  public cadastrarUsuario(): void {
    this.router.navigate([Rotas.USUARIO.cadastro])
  }

}
