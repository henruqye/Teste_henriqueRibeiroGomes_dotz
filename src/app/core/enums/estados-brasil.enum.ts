const listaEstados: Array<EnumEstados> = [];

export class EnumEstados {
    
    static AC = new EnumEstados(1, "AC", "Acre");
    static AL = new EnumEstados(2, "AL", "Alagoas");
    static AP = new EnumEstados(3, "AP", "Amapá");
    static AM = new EnumEstados(4, "AM", "Amazonas");
    static BA = new EnumEstados(5, "BA", "Bahia",);
    static CE = new EnumEstados(6, "CE", "Ceará");
    static DF = new EnumEstados(7, "DF", "Distrito Federal");
    static ES = new EnumEstados(8, "ES", "Espírito Santo");
    static GO = new EnumEstados(9, "GO", "Goiás");
    static MA = new EnumEstados(10, "MA", "Maranhão");
    static MT = new EnumEstados(11, "MT", "Mato Grosso");
    static MS = new EnumEstados(12, "MS", "Mato Grosso do Sul");
    static MG = new EnumEstados(13, "MG", "Minas Gerais");
    static PA = new EnumEstados(14, "PA", "Pará");
    static PB = new EnumEstados(15, "PB", "Paraíba");
    static PR = new EnumEstados(16, "PR", "Paraná");
    static PE = new EnumEstados(17, "PE", "Pernambuco");
    static PI = new EnumEstados(18, "PI", "Piauí");
    static RJ = new EnumEstados(19, "RJ", "Rio de Janeiro");
    static RN = new EnumEstados(20, "RN", "Rio Grande do Norte");
    static RS = new EnumEstados(21, "RS", "Rio Grande do Sul");
    static RO = new EnumEstados(22, "RO", "Rondônia");
    static RR = new EnumEstados(23, "RR", "Roraima");
    static SC = new EnumEstados(24, "SC", "Santa Catarina");
    static SP = new EnumEstados(25, "SP", "São Paulo");
    static SE = new EnumEstados(26, "SE", "Sergipe",);
    static TO = new EnumEstados(27, "TO", "Tocantins");

    constructor(public codigo: number, public sigla: string ,public descricao: string) {
        listaEstados.push(this);
    }

    public static values(): Array<EnumEstados> {
        return listaEstados;
    }

    public static getBy(codigo: number): EnumEstados {
        return listaEstados.filter((p: EnumEstados) => p.codigo === codigo)[0];
    }
}
