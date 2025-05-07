import promptSync from 'prompt-sync';

const prompt = promptSync();
let classesEscolhidas: boolean = false
let count: number = 0
let jogadores = []
let classes = /[123]/

while(!classesEscolhidas){
  console.log("-|----------------------------------------|-")
  console.log(" |                                        | ")
  console.log(` | Qual a classe do jogador ${count + 1}?            |`)
  console.log(" | 1. Cavalheiro, 2. Mago, 3. Gladiador   | ")
  jogadores[count] = prompt(" | Faça sua escolha: ")

  if (!classes.test(jogadores[count])) {
                " | 1. Cavalheiro, 2. Mago, 3. Gladiador   | "
    console.log(" | Escolha um valor válido                | ")
    console.log("-|----------------------------------------|-")
    process.exit();

  }
  console.log(" |                                        | ")
  console.log("-|----------------------------------------|-")

  if (count > 0) {
    classesEscolhidas = true
  }

  count++
}

// Loop para mudar os elementos do array de jogadores para as suas respectivas classes

for (let i = 0, l = jogadores.length; i < l; i++) {
  for (let j = 0; j < 3; j++) {
    if (j + 1 == parseInt(jogadores[i])){
      if (j + 1 == 1){
        jogadores[i] = "Cavalheiro"
      } else if (j + 1 == 2){
        jogadores[i] = "Mago"
      } else {
        jogadores[i] = "Gladiador"
      }
      //console.log(jogadores[i])
    }
  }
}


