import { EnumEstados } from '../enums/estados-brasil.enum';
import { EnumPais } from '../enums/pais.enum';

export class Endereco {
    id: number;
    cep: string;
    bairro: string;
    logradouro: string;
    numeroResidencia: string;
    complemento: string;
    pontoReferencia: string;
    cidade: string;
    estado: number;
    pais: number;
}
