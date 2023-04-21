//Answers:  Variables
let variableSinValor;
let booleano1 = true;
let booleano2 = false;
const PI = 3.14;
const TAU = 2*3.14;

//Answers:  Booleanos
const booleanoAnd = booleano1 === booleano2;
const booleanoNot = !booleano1;
const booleanoMix0 = (booleano1 || booleano2) && (booleano1 || (!booleano1 && !booleano2));

//Answers:  Operadores
let incrementarDesp = 2;
resultadoDesp = incrementarDesp++;
let incrementarAntes = 2;
resultadoAntes =  ++incrementarAntes;

//Answers:  Bucles
let contarHasta10_2 = 0;
for (let i=0; i<=10; i++) {
  contarHasta10_2 = i;
}

let postI = 0;
let postJ = 0;
for (let i=0; i<11; i++) {
  postI  += postJ++;
}

let sumaPares = 0;
for (let i=0; i<10; i++) {
  if(i % 2 === 0) {
    sumaPares += i;
  }
}

//Answers:  Variables
let variableValorNumerico = 69; 
const MiNombre = 'Mariangelica';
const MiNumeroFav = 951;

//Answers:  Booleanos
const booleanoOr = booleano1 || booleano2;
const booleanoMix1 = (booleano1 && (TAU/2 === PI)) || (variableValorNumerico >= MiNumeroFav);
const seisNoEsNueve = 6 !== 9;
const booleanoMix2 = (variableValorNumerico > 0) || (variableValorNumerico < (MiNumeroFav * TAU));

//Answers:  Operadores
const valorSuma = MiNumeroFav + variableValorNumerico;
const valorResta = MiNumeroFav - variableValorNumerico;
let valorMultiplicacion = MiNumeroFav * variableValorNumerico;
const valorDivision = MiNumeroFav/3;

//Answers:  Bucles
let contarHasta10 = 0;
while (contarHasta10 < 10) {
  contarHasta10++
}

let preI = 0;
let preJ = 0;
for(let n=0; n<11; n++) {
  preI += ++preJ;
}

let sumaImpares = 0;
for (let i=0; i<10; i++) {
  if (!(i % 2 === 0)) {
    sumaImpares += i;
  }
} 