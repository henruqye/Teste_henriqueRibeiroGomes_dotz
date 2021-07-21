import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EnumEstados } from '../../../core/enums/estados-brasil.enum';
import { CALENDARIO_PT_BR } from '../../../core/locale/calendario'

@Component({
  selector: 'app-usuario-cadastro',
  templateUrl: './usuario-cadastro.component.html',
  styleUrls: ['./usuario-cadastro.component.scss']
})
export class UsuarioCadastroComponent implements OnInit {
  
  public listaEstadosBrasileiro = EnumEstados.values();
  public formulario: FormGroup;
  public ehDispositivoMovel: boolean = false;
  public pt = CALENDARIO_PT_BR;

  constructor(
    private fb: FormBuilder
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
      Contato: [null, Validators.required],

      pais: ["Brasil"],
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

  
}
