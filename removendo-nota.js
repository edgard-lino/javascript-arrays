const notas = [10, 6, 8, 5.5, 10];

notas.pop();

console.log(notas);

let somaNotas = 0;

for (var i = 0; i < notas.length; i++) {
  somaNotas += notas[i];
};

const media = somaNotas / notas.length;

console.log(`A média das notas é ${media}`);