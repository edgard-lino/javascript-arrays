const nomes = ["ana Julia", "Caio vinicius", "BIA silvia"];

const nomesPadronizados = nomes.map((nome) => {
  return nome.toUpperCase();
});

console.log(nomesPadronizados);

// Outra forma mais simples de escrever:

// const nomesPadronizados = nomes.map((nome) => nome.toUpperCase());

// console.log(nomesPadronizados);