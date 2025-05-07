class Pokemon{
    private _nome: string = "Dragapult"
    private _tipo: "Dragão" | "Voador" = "Dragão"

    constructor(){}

    get nome(): string{
        return this._nome + " é o pokemon escolhido"
    }

    set nome(nome: string){
        this._nome = nome
    }

    get tipo(): string{
        return this._tipo
    }

    set tipo(tipo: "Dragão" | "Voador"){
        this._tipo = tipo
    }
}

let dragapult: Pokemon = new Pokemon()

console.log(dragapult.nome)

dragapult.nome = "Garchomp"

console.log(dragapult)
