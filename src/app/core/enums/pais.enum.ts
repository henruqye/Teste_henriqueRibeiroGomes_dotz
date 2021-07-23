
const listaPaises: Array<EnumPais> = [];
export class EnumPais {
    static BRASIL = new EnumPais(1, 'Brasil');

    constructor(public codigo: number, public descricao: string) {
        listaPaises.push(this);
    }

    public static values(): Array<EnumPais> {
        return listaPaises;
    }

    public static getBy(codigo: number): EnumPais {
        return listaPaises.filter((p: EnumPais) => p.codigo === codigo)[0];
    }
}
