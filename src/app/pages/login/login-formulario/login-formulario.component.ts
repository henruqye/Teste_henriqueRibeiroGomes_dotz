import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng-lts/api';
import { Rotas } from '../../../core/enums/rotas.enum';
import { InformacoesLogon } from '../../../core/entities/informacoes-logon';
import { LoginFormularioService } from './login-formulario.service';

@Component({
  selector: 'app-login-formulario',
  templateUrl: './login-formulario.component.html',
  styleUrls: ['./login-formulario.component.scss'],
  providers: [ MessageService ]
})
export class LoginFormularioComponent implements OnInit {
  
  public formulario: FormGroup;

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

    let informacoesLogon = new InformacoesLogon();
    informacoesLogon = this.obtemInformacoesLogon();
    if (this.ehSenhaValida(informacoesLogon)) {
      this.messageService.add({severity:'sucss', summary: 'Sucesso', detail: 'deu certo'});
    } else {
      this.messageService.add({severity:'error', summary: 'Erro', detail: 'Senha inválida!'});
    }
  }
  
  private obtemInformacoesLogon(): InformacoesLogon {
    
    let informacoesLogon = new InformacoesLogon();
    this.service.obtemInformacoesLogon(this.formulario.get('email').value).then((informacoesLogonResult) => {
      informacoesLogon = informacoesLogonResult;
      if (!informacoesLogon) {
        this.messageService.add({severity:'error', summary: 'Erro', detail: 'E-mail não encontrado'});
        return;
      }
    })

    return informacoesLogon;
  }
  
  private ehSenhaValida(informacoesLogon: InformacoesLogon): boolean {
    if (this.formulario.get('senha').value === informacoesLogon.senha)
      return true;
    else  
      false;
  }

  public cadastrarUsuario(): void {
    this.router.navigate([Rotas.USUARIO.cadastro])
  }

}
