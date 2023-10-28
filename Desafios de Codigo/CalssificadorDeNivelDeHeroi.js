// Desafio de código: Classificador de Nível de Herói

let nomeHeroi = "João";
let experienciaXP = 3500;

if (experienciaXP <= 1000) {
    console.log("O Herói de nome " + nomeHeroi + " está no nível Ferro");
} else if (experienciaXP <= 2000) {
    console.log("O Herói de nome " + nomeHeroi + " está no nível Bronze");
} else if (experienciaXP <= 5000) {
    console.log("O Herói de nome " + nomeHeroi + " está no nível Prata");
} else if (experienciaXP <= 7000) {
    console.log("O Herói de nome " + nomeHeroi + " está no nível Ouro");
} else if (experienciaXP <= 8000) {
    console.log("O Herói de nome " + nomeHeroi + " está no nível Platina");
} else if (experienciaXP <= 9000) {
    console.log("O Herói de nome " + nomeHeroi + " está no nível Diamante");
} else if (experienciaXP <= 10000) {
    console.log("O Herói de nome " + nomeHeroi + " está no nível Mestre");
} else {
    console.log("O Herói de nome " + nomeHeroi + " está em um nível desconhecido");
}
