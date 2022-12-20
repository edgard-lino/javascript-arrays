// const nome = "Alura";
// ["A", "l", "u", "r", "a"]



const nome = "Alura";
let nomeMaiusculas = "";

for (let i = 0; i < nome.length; i++) {
 nomeMaiusculas += nome[i].toUpperCase()
}
console.log(nomeMaiusculas) //ALURA



const nomedoCurso = "Fundamentos de JS";
const nomeDaPlataforma = " Alura"

const nomeCompleto = nomedoCurso.concat(nomeDaPlataforma)
console.log(nomeCompleto)  //Fundamentos de JS Alura


// Para saber mais

// const arrayNums = [1, 2, 3, 4];

// function multiplicaPorDez(num) {
//   return num * 10;
// }

// const arraySomada = arrayNums.map(multiplicaPorDez);

// console.log(arraySomada);

// E agora fazendo numa aero function anônima

// const arraySomada = arrayNums.map(num => num * 10)

// console.log(arraySomada)