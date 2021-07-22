import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Rotas } from '../../../core/enums/rotas.enum';

@Component({
  selector: 'app-login-formulario',
  templateUrl: './login-formulario.component.html',
  styleUrls: ['./login-formulario.component.scss']
})
export class LoginFormularioComponent implements OnInit {
  
  public formulario: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.criaFormulario();
  }
  
  private criaFormulario(): void {
    this.formulario = this.fb.group({
      usuario: [null, Validators.required],
      senha: [null, Validators.required]
    })
  }

  public autenticarUsuario() {}

  public cadastrarUsuario(): void {
    this.router.navigate([Rotas.USUARIO.cadastro])
  }

}
