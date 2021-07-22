
const listaTipoContato: Array<EnumTipoContato> = [];

export class EnumTipoContato {
    
    static TELEFONE = new EnumTipoContato(1, "telefone");


    constructor(public codigo: number, public descricao: string) {
        listaTipoContato.push(this);
    }

    public static values(): Array<EnumTipoContato> {
        return listaTipoContato;
    }

    public static getBy(codigo: number): EnumTipoContato {
        return listaTipoContato.filter((p: EnumTipoContato) => p.codigo === codigo)[0];
    }
}
