/* 
Papa Noél tiene nuevos trineos eléctricos pero debe controlar el consumo eléctrico ya que sólo tiene una batería de 20W.

Nos dan un array de trineos, de peor a mejor, con sus respectivos consumos. Cada trineo es un objeto con dos propiedades: name y consumption.

El campo consumption es un número que representa la cantidad de vatios (W) que consume el trineo para cada unidad de distancia. El campo name es una cadena de texto que representa el nombre del trineo.

Crea un programa que nos devuelva el nombre del mejor trineo disponible que nos permita cubrir la distancia.
*/

function selectSleigh(distance, sleighs) {
  const sleigh = sleighs
    .filter((item) => 20 / item.consumption >= distance)
    .at(-1);
  return sleigh ? sleigh.name : null;
}

const distance = 30;
const sleighs = [
  { name: 'Dasher', consumption: 0.3 },
  { name: 'Dancer', consumption: 0.5 },
  { name: 'Rudolph', consumption: 0.7 },
  { name: 'Midu', consumption: 1 },
];

console.log(selectSleigh(distance, sleighs)); // => "Dancer"
