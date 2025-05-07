import promptSync from 'prompt-sync';

const prompt = promptSync();
let classesEscolhidas: boolean = false
let count: number = 1
let jogadores = []
let classes = /[xmz]/

while(!classesEscolhidas){
  console.log("-|----------------------------------------|-")
  console.log(" |                                        | ")
  console.log(` | Qual a classe do jogador ${count}?            |`)
  console.log(" | 1. Cavalheiro, 2. Mago, 3. Gladiador   | ")
  jogadores[count - 1] = prompt(" | Faça sua escolha: ")

  if (!classes.test(jogadores[count - 1])) {
                " | 1. Cavalheiro, 2. Mago, 3. Gladiador   | "
    console.log(" | Escolha um valor válido                | ")
    console.log("-|----------------------------------------|-")
    process.exit();

  }
  console.log(" |                                        | ")
  console.log("-|----------------------------------------|-")

  if (count >= 2) {
    classesEscolhidas = true
  }

  count++
}


