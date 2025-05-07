"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
let classesEscolhidas = false;
let count = 1;
let jogadores = [];
let classes = /[123]/;
while (!classesEscolhidas) {
    console.log("-|----------------------------------------|-");
    console.log(" |                                        | ");
    console.log(` | Qual a classe do jogador ${count}?            |`);
    console.log(" | 1. Cavalheiro, 2. Mago, 3. Gladiador   | ");
    jogadores[count - 1] = prompt(" | Faça sua escolha: ");
    if (!classes.test(jogadores[count - 1])) {
        " | 1. Cavalheiro, 2. Mago, 3. Gladiador   | ";
        console.log(" | Escolha um valor válido                | ");
        console.log("-|----------------------------------------|-");
        process.exit();
    }
    console.log(" |                                        | ");
    console.log("-|----------------------------------------|-");
    if (count >= 2) {
        classesEscolhidas = true;
    }
    count++;
}
// console.log(jogadores.length)
for (let i = 1; i <= jogadores.length; i++) {
    for (let j = 0; j < i; j++) {
        console.log(jogadores[i - 1]);
    }
}
//# sourceMappingURL=rpg.js.map