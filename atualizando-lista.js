const nomes = ["João", "Ana", "Caio", "Lara", "Marjorie", "Leo"];

nomes.splice(1, 2, "Rodrigo", "Edgard", "Maria");
// 1 -> índice do primeiro elemento a ser deletado
// 2 -> número de elementos a serem deletados
// 3 -> elemento(s) para substituir

console.log(nomes);