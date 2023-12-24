let nome = "Diogo";
const niveisXP = {
  1000: "Ferro",
  1001: "Bronze",
  2001: "Prata",
  5001: "Ouro",
  7001: "Platina",
  8001: "Ascendente",
  10000: "Imortal",
  10001: "Radiante",
};

if (niveisXP > 1000) {
  console.log("O Herói de nome " + nome, "está no nível de: Ferro");
} else if (niveisXP >= 1001 && niveisXP <= 2000) {
  console.log("O Herói de nome " + nome, "está no nível de: Bronze");
} else if (niveisXP >= 2001 && niveisXP <= 5000) {
  console.log("O Herói de nome " + nome, "está no nível de: Prata");
} else if (niveisXP >= 5001 && niveisXP <= 7000) {
  console.log("O Herói de nome " + nome, "está no nível de: Ouro");
} else if (niveisXP >= 7001 && niveisXP <= 8000) {
  console.log("O Herói de nome " + nome, "está no nível de: Platina");
} else if (niveisXP >= 8001 && niveisXP <= 9000) {
  console.log("O Herói de nome " + nome, "está no nível de: Ascendente");
} else if (niveisXP >= 9001 && niveisXP <= 10000) {
  console.log("O Herói de nome " + nome, "está no nível de: Imortal");
} else {
  console.log("O Herói de nome " + nome, "está no nível de: Radiante");
}
