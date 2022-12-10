const notas = [10, 6, 8];

notas.push(7);

let somaNotas = 0;

for (var i = 0; i < notas.length; i++) {
  somaNotas += notas[i];
};

const media = somaNotas / notas.length;

console.log(media.toFixed(2));