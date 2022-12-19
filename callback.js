const nomes = ["Evaldo", "Mari", "Camis"];


// Primeira forma:
// nomes.forEach(function(nome){
//   console.log(nome);
// });

// Segunda forma:
// nomes.forEach((nome) => {
//   console.log(nome);
// });

// Terceira forma:
function imprimeNome(nome) {
  console.log(nome);
}

nomes.forEach(imprimeNome);