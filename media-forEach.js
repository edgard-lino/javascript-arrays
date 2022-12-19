const notas = [10, 6.5, 8, 7.5];

// notas.forEach(function(){  //Função CallBack!!!!
//   console.log("oi!");
// });

let somaDasNotas = 0;

// notas.forEach(function(nota){
//   console.log(nota);
// });

// notas.forEach(function(nota){
//   somaDasNotas += nota;
// });

// const media = somaDasNotas / notas.length;

// console.log(`A média das notas é ${media}.`);

// Exemplo com o índice:
notas.forEach(function(nota, indice){
  console.log(indice);
});