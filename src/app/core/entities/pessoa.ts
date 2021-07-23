import { Contato } from './contato';
import { Endereco } from './endereco';
export class Pessoa {
    id: number;
    nome: string;
    sobrenome: string;
    cpf: string;
    dataNascimento: Date;
    contato: Contato;
    informacoesDeEntrega: Endereco;
}
