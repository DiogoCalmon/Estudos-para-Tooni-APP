"use strict";
class Pokemon {
    constructor() {
        this._nome = "Dragapult";
        this._tipo = "Dragão";
    }
    get nome() {
        return this._nome + " é o pokemon escolhido";
    }
    set nome(nome) {
        this._nome = nome;
    }
    get tipo() {
        return this._tipo;
    }
    set tipo(tipo) {
        this._tipo = tipo;
    }
}
let dragapult = new Pokemon();
console.log(dragapult.nome);
dragapult.nome = "Garchomp";
console.log(dragapult);
//# sourceMappingURL=usuario.js.map