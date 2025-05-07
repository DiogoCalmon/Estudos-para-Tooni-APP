let pokemon: {nome: string, tipo:string} | string = {
    nome : "Pikachu",
    tipo : "Elétrico"
}

console.log(pokemon)

pokemon = "Infernape"

console.log(pokemon)


let cpf: string | number = null
type cpf = string|number

let numero = "098.696.781-21"

console.log(numero)
console.log(cpf)