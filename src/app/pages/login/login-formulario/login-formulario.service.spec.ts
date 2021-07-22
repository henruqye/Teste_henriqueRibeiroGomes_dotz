import { TestBed } from '@angular/core/testing';

import { LoginFormularioService } from './login-formulario.service';

describe('LoginFormularioService', () => {
  let service: LoginFormularioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginFormularioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
