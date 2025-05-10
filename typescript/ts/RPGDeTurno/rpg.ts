import promptSync from 'prompt-sync';
import * as classe from './classes';
import Lutador from './lutador';

const prompt = promptSync();
let classesEscolhidas: boolean = false
let count: number = 0
let classes: string[] = []
let jogadores: (classe.Cavalheiro | classe.Mago | classe.Gladiador)[] = []
let numeros = /[123]/

while(!classesEscolhidas){
  console.log("-|----------------------------------------|-")
  console.log(" |                                        | ")
  console.log(` | Qual a classe do jogador ${count + 1}?            |`)
  console.log(" | 1. Cavalheiro, 2. Mago, 3. Gladiador   | ")
  classes[count] = prompt(" | Faça sua escolha: ")

  if (typeof(classes[count]) === "string") {
    if (!numeros.test(classes[count])) {
      console.log(" | Escolha um valor válido                | ")
      console.log("-|----------------------------------------|-")
      console.log("")
      process.exit()
    }
  }

  console.log(" |                                        | ")
  console.log("-|----------------------------------------|-")
  console.log("")

  if (count > 0) {
    classesEscolhidas = true
  }

  count++
}

// Loop para mudar os elementos do array de jogadores para as suas respectivas classes

for (let i = 0, l = classes.length; i < l; i++) {
  for (let j = 0; j < 3; j++) {
    if (j + 1 == parseInt(classes[i])){
      if (j + 1 == 1){
        jogadores[i] = new classe.Cavalheiro()
      } else if (j + 1 == 2){
        jogadores[i] = new classe.Mago()
      } else {
        jogadores[i] = new classe.Gladiador()
      }
      break
      //console.log(jogadores[i])
    }
  }
}

// Instanciando objetos baseado na escolha dos jogadores
const jogador1 = jogadores[0]
const jogador2 = jogadores[1]


// Aqui começará o jogo
console.log("")
console.log("")
console.log(`Jogador 1: ${jogador1.tipo} vs Jogador 2: ${jogador2.tipo}`)
console.log("      ---> Lutem <---      ")
console.log("")

let turno: 0 | 1 = Math.round(Math.random()) as 0 | 1

while (jogador1.hp > 0 && jogador2.hp > 0) {
  if (turno == 0) {

    if (jogador1.fadiga > 0){
      console.log("")
      console.log("-|----------------------------------------|-")
      console.log(` | Jogador 1 está com ${jogador1.fadiga} turno(s) de fadiga | `)
      console.log("-|----------------------------------------|-")
      console.log("")

      jogador1.fadiga = 1
      turno = 1
      continue
    }

    console.log("")
    console.log("-|----------------------------------------|-")
    console.log(` |   Vez do Jogador 1 - ${jogador1.tipo}  | `)
    console.log(` |          HP - ${jogador1.hp}                   | `)
    console.log(` |         Mana - ${jogador1.mana}                  | `)
    console.log(" |                                        | ")
    console.log("-|----------------------------------------|-")
    console.log(" |                                        | ")
    console.log(" |         Qual será a sua jogada:        | ")
    console.log(" |       1. Atacar       2. Defender      | ")
    console.log(" |       3. Meditar      4. Especial      | ")
    console.log(" |                                        | ")

    let escolha: string = prompt(" | Escolha: ")
    if (!/^[1234]$/.test(escolha)) {
      console.log("-|----------------------------------------|-")
      console.log("          Escolha um valor válido           ")
      console.log("")
      continue

    } else {
      if (escolha == "1"){
        let dano = jogador1.atacar()
        jogador2.hp = dano - jogador2.escudo
        console.log(`O jogador 2 recebeu ${dano - jogador2.escudo} de dano`)
        
        jogador2.escudo = dano
        console.log(`Hp: ${jogador2.hp}| Escudo: ${jogador2.escudo}`)

      } else if (escolha == "2"){
        jogador1.defender()
        console.log(`O jogador 1 aumentou o seu escudo para ${jogador1.escudo}`)

      } else if (escolha == "3"){
        jogador1.meditar()
        console.log(`O jogador 1 aumentou sua mana para ${jogador1.mana}`)

      } else if (escolha == "4"){

      }
    }
    turno = 1
  } else {
    if (jogador2.fadiga > 0){
      console.log("")
      console.log("-|----------------------------------------|-")
      console.log(` |      Jogador 2 está com ${jogador2.fadiga} turno(s) de fadiga    | `)
      console.log("-|----------------------------------------|-")
      console.log("")

      jogador2.fadiga = 1
      turno = 0
      continue
    }

    console.log("")
    console.log("-|----------------------------------------|-")
    console.log(` |   Vez do Jogador 2 - ${jogador2.tipo}  | `)
    console.log(` |          HP - ${jogador2.hp}           | `)
    console.log(` |         Mana - ${jogador2.mana}        | `)
    console.log(" |                                        | ")
    console.log("-|----------------------------------------|-")
    console.log(" |                                        | ")
    console.log(" |         Qual será a sua jogada:        | ")
    console.log(" |       1. Atacar       2. Defender      | ")
    console.log(" |       3. Meditar      4. Especial      | ")
    console.log(" |                                        | ")

    let escolha: string = prompt(" | Escolha: ")
    if (!/^[1234]$/.test(escolha)) {
      console.log("-|----------------------------------------|-")
      console.log("          Escolha um valor válido           ")
      console.log("")
      continue

    } else {
      if (escolha == "1"){
        let dano = jogador2.atacar()
        jogador1.hp = dano - jogador1.escudo
        console.log(`O jogador 1 recebeu ${dano - jogador1.escudo} de dano`)

        jogador1.escudo = dano
        console.log(`Hp: ${jogador1.hp}| Escudo: ${jogador1.escudo}`)

      } else if (escolha == "2"){
        jogador2.defender()
        console.log(`O jogador 2 aumentou o seu escudo para ${jogador2.escudo}`)

      } else if (escolha == "3"){
        jogador2.meditar()
        console.log(`O jogador 2 aumentou sua mana para ${jogador2.mana}`)

      } else if (escolha == "4"){

      }
    }
    turno = 0
  }
}




