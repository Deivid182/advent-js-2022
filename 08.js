
/* 
Se han estropeado algunos trineos eléctricos y los elfos están buscando piezas de repuesto para arreglarlos, pero no tienen claro si las piezas que tienen sirven.

Las piezas de repuesto son cadenas de texto y el mecánico Elfon Masc ha dicho que una pieza de repuesto es válida si la pieza puede ser un palíndromo después de eliminar, como máximo, un carácter.

Un palíndromo es una palabra o frase que se lee igual de izquierda a derecha que de derecha a izquierda.
*/

function checkPart(part) {
  //['u', 'w', 'u']
  return [...part].some((e, i, arr) => {
    let word = arr.filter((_, j) => j != i)
    return word.join('') === word.reverse().join('')
  })
}

const result = checkPart('miidim')
console.log(result)

