import { Contato } from './contato';
import { Endereco } from './endereco';
import { InformacoesLogon } from './informacoes-logon';

export class Pessoa {
    id: number;
    nome: string;
    sobrenome: string;
    cpf: string;
    dataNascimento: Date;
    contato: Contato;
    informacoesDeEntrega: Endereco;
}