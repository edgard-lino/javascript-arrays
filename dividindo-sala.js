const alunos = ["João", "Juliana", "Ana", "Caio", "Lara", "Marjorie", "Guilherme", "Aline", "Fabiana", "Andre", "Carlos", "Paula", "Bia", "Vivian", "Isabela", "Vinicius", "Renan", "Renata", "Daisy", "Camila"];



// const sala1 = alunos.slice(0, 10);
// const sala2 = alunos.slice(10); // para ir até o último não precisa do segundo termo.

const sala1 = alunos.slice(0, alunos.length/2);
const sala2 = alunos.slice(alunos.length/2);

console.log(sala1);
console.log(sala2);