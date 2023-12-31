/* 
Una pareja de entusiastas de la navidad ha creado una empresa de adornos navideños. El primer adorno que quieren fabricar es un cubo que se pone en los árboles.

El problema es que tienen que programar la máquina y no saben cómo hacerlo. Nos han pedido ayuda para lograrlo.

Para crear los cubos se le pasa un número con el tamaño deseado al programa y este devuelve un string con el diseño de ese tamaño. Por ejemplo, si le pasamos un 3, el programa debe devolver un cubo de 3x3x3:
*/

function createCube(size) {
  /* 
  
  /\ _\_\_\
 /\/\ _\_\_\
/\/\/\ _\_\_\

\/\/\/ _/_/_/
 \/\/ _/_/_/
  \/ _/_/_/
  */

  let head = [];
  let tail = [];

  for (let i = 1; i <= size; i++) {
    head.push(' '.repeat(size - i) + '/\\'.repeat(i) + '_\\'.repeat(size));
    tail.push(
      ' '.repeat(i - 1) + '\\/'.repeat(size - (i - 1)) + '_/'.repeat(size)
    );
  }

  return [...head, ...tail].join('\n');
}

console.log(createCube(5));
