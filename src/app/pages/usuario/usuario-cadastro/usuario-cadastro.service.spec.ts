import { TestBed } from '@angular/core/testing';

import { UsuarioCadastroService } from './usuario-cadastro.service';

describe('UsuarioCadastroService', () => {
  let service: UsuarioCadastroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsuarioCadastroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
