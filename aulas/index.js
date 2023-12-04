// Defina o nome e a quantidade de experiência (XP) do herói
let nomeHeroi = "Exemplo";
let xpHeroi = 8965; // Coloque aqui a quantidade desejada de XP

// Utilize uma estrutura de decisão para determinar o nível com base na XP
let nivelHeroi;

if (xpHeroi < 1000) {
  nivelHeroi = "Ferro";
} else if (xpHeroi >= 1001 && xpHeroi <= 2000) {
  nivelHeroi = "Bronze";
} else if (xpHeroi >= 2001 && xpHeroi <= 5000) {
  nivelHeroi = "Prata";
} else if (xpHeroi >= 6001 && xpHeroi <= 7000) {
  nivelHeroi = "Ouro";
} else if (xpHeroi >= 7001 && xpHeroi <= 8000) {
  nivelHeroi = "Platina";
} else if (xpHeroi >= 8001 && xpHeroi <= 9000) {
  nivelHeroi = "Ascendente";
} else if (xpHeroi >= 9001 && xpHeroi <= 10000) {
  nivelHeroi = "Imortal";
} else {
  nivelHeroi = "Radiante";
}

// Exiba a mensagem com o nome e o nível do herói
console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivelHeroi}`);
