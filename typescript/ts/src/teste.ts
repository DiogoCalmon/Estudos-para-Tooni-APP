class Yugioh<T>{
    private _nome: T

    constructor (nome: T){
        this._nome = nome
    }

    get nome(){
        return this._nome
    }
}

let magoNegro = new Yugioh("Mago Negro")
let dragaoBranco = new Yugioh(30)


console.log(typeof magoNegro.nome);
console.log(typeof dragaoBranco.nome);
