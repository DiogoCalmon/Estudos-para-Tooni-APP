class Lutador {
    readonly tipo: string
    protected atk: number = 0
    protected hp: number = 0
    protected mana: number = 0
    protected escudo: number = 0

    constructor (tipo: string) {
        this.tipo = tipo
    }
}