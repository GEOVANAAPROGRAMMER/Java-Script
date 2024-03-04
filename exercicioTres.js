const readlineSync = require('readline-sync');


const umidade = parseFloat(readlineSync.question("Informe a umidade atual (em percentagem): "));

if (umidade > 60) {
    console.log("O ar está húmido.");
} else if (umidade >= 30 && umidade <= 60) {
    console.log("O ar está seco.");
} else if (umidade < 30) {
    console.log("O ar está muito seco.");
} else {
    console.log("Valor de umidade inválido.");
}
