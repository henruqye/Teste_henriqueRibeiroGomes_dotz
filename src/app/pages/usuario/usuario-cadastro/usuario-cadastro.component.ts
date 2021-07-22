import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Rotas } from '../../../core/enums/rotas.enum';
import { EnumEstados } from '../../../core/enums/estados-brasil.enum';
import { CALENDARIO_PT_BR } from '../../../core/locale/calendario'
import { MessageService } from 'primeng-lts/api';
import { cpf } from 'cpf-cnpj-validator'; 
import { EnumPais } from 'src/app/core/enums/pais.enum';
import { UsuarioCadastroService } from './usuario-cadastro.service';
import { Pessoa } from '../../../core/entities/pessoa';
import { Contato, Endereco } from 'src/app/core/entities';
import { EnumTipoContato } from '../../../core/enums/tipo-contato.enum';
import { InformacoesLogon } from '../../../core/entities/informacoes-logon';

@Component({
  selector: 'app-usuario-cadastro',
  templateUrl: './usuario-cadastro.component.html',
  styleUrls: ['./usuario-cadastro.component.scss'],
  providers: [ MessageService ]
})
export class UsuarioCadastroComponent implements OnInit {
  
  public listaEstadosBrasileiro = EnumEstados.values();
  public formulario: FormGroup;
  public ehDispositivoMovel: boolean = false;
  public pt = CALENDARIO_PT_BR;
  private cpfValidator = cpf;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private messageService: MessageService,
    private service: UsuarioCadastroService
  ) { }

  ngOnInit(): void {

    this.criarFormularioDeCadastro();
  }
  
  private criarFormularioDeCadastro() {
    this.formulario = this.fb.group({
      nome: [null, Validators.required],
      sobrenome: [null, Validators.required],
      cpf: [null, Validators.required],
      dataNacimento: [null, Validators.required],
      contato: [null, Validators.required],
    
      pais: [EnumPais.BRASIL.descricao],
      estado: [null, Validators.required],
      cidade: [null, Validators.required],
      cep: [null, Validators.required],
      bairro: [null, Validators.required],
      logradouro: [null, Validators.required],
      numeroResidencia: [null, Validators.required],
      complemento: [null],
      pontoReferencia: [null],

      email: [null, Validators.required],
      senha: [null, Validators.required],
      confirmacaoSenha: [null, Validators.required]
    })
  }

  public verificarTipoDispositivo() {

    return window.innerWidth <= 650
      ? (this.ehDispositivoMovel = true)
      : (this.ehDispositivoMovel = false);
  }
  
  public salvar(): void{
    
    if (this.formulario.valid) {

      if (!this.ehSenhaValida())
        return;
        
      let pessoa = this.salvarPessoa();
      this.salvarInformacoesLogon(pessoa.id);
    }
  }
  
  private salvarInformacoesLogon(idPessoa: number) {

    let informacoesLogon = new InformacoesLogon();
    informacoesLogon.email = this.formulario.get("email").value;
    informacoesLogon.senha = this.formulario.get("senha").value;
    informacoesLogon.pessoa = idPessoa;

    this.service.salvarInformacoesLogon(informacoesLogon).subscribe((informacoesLogon) => {
      this.messageService.add({severity:'success', summary: 'Sucesso', detail: 'Cadastro realizado com sucesso'});
    })
  }

  private salvarPessoa(): Pessoa {
    
    let pessoacadastrada = new Pessoa();
    let pessoa = new Pessoa();
    pessoa.nome = this.formulario.get("nome").value;
    pessoa.sobrenome = this.formulario.get("sobrenome").value;
    pessoa.cpf = this.removendoPontuacao(this.formulario.get("sobrenome").value);
    pessoa.dataNascimento = this.formulario.get("dataNacimento").value;
    pessoa.contato = this.montaOnjetoContato();
    pessoa.informacoesDeEntrega = this.montaObjetoEndereco();
    
    this.service.salvarPessoa(pessoa).subscribe((pessoa) => {
      pessoacadastrada = pessoa
    })

    return pessoacadastrada;
  }
  
  private montaOnjetoContato(): Contato {
    
    var contato = new Contato();
    contato.descricao = this.formulario.get("contato").value;
    contato.tipoContato = EnumTipoContato.TELEFONE.codigo;
    
    return contato;
  }
  
  private montaObjetoEndereco(): Endereco {
    
    var endereco = new Endereco();
      endereco.pais = EnumPais.BRASIL.codigo;
      endereco.estado = this.formulario.get("estado").value.codigo;
      endereco.cidade =this.formulario.get("cidade").value;
      endereco.cep = this.formulario.get("cep").value;
      endereco.logradouro = this.formulario.get("logradouro").value;
      endereco.numeroResidencia = this.formulario.get("numeroResidencia").value;
      endereco.complemento = this.formulario.get("complemento").value;
      endereco.pontoReferencia = this.formulario.get("pontoReferencia").value;
    
      return endereco;
  }

  public cancelar(): void {

    this.router.navigate([Rotas.LOGIN.formulario])
  }
  
  private ehSenhaValida(): boolean {
    
    if (
        this.formulario.get('senha').value && 
        this.formulario.get('confirmacaoSenha').value ||
        this.formulario.get('senha').value != "" && 
        this.formulario.get('confirmacaoSenha').value != ""
      ) {

      if (this.formulario.get('senha').value != this.formulario.get('confirmacaoSenha').value) {
        
        this.messageService.add({severity:'error', summary: 'Erro', detail: 'As senhas não são iguais'});
        return false;
      } else
        return true;
    } else {

      this.messageService.add({severity:'error', summary: 'Erro', detail: 'Preencha as informações de senha'});
      return false;
    }
  }

  public ehCpfValido(): boolean {
    let cpf = this.removendoPontuacao(this.formulario.get('cpf').value);
    if (!this.cpfValidator.isValid(cpf)) {

      this.messageService.add({severity:'warn', summary: 'Atenção', detail: 'senha inválida'});
      this.formulario.get('cpf').invalid;
      return false;
    } else {
      
      this.formulario.get('cpf').valid;
      return true;
    }
  }
  
  private removendoPontuacao(cpf: string) {
    return cpf.replace(/[.-]/g, "",)
  }

}
