import oliver from './oliver.js'

// Arreglo para las pruebas
const numbers = [1,2,3,4,5];
console.log('Dado el arreglo ', numbers)

// PRUEBA DE myEach
console.log('Esta es la prueba de myEach')
oliver.myEach(numbers, (number) => {
    console.log(number);
})


// PRUEBA DE myFilter
console.log('Esta es la prueba de myFilter evalunado numero mayores que 2')
const testFilter = oliver.myFilter(numbers, number => number > 2);
console.log(testFilter)

// PRUEBA DE myMap
console.log('Esta es la prueba de myMap multiplicando cada elemento por 2')
const testMap = oliver.myMap(numbers, number => number*2);
console.log(testMap)

// PRUEBA DE myFind
console.log('Esta es la prueba de myFind buscando el primer elemento mayor que 3')
const testFind = oliver.myFind(numbers, number => number > 3);
console.log(testFind)

// PRUEBA DE myFindIndex
console.log('Esta es la prueba de myFindIndex buscando el Indice del primer elemento mayor que 5')
const testFindIndex = oliver.myFindIndex(numbers, number => number > 5);
console.log(testFindIndex)

// PRUEBA DE myContains
console.log('Esta es la prueba de myContains buscando si el arreglo contiene el valor de 4')
const testContains = oliver.myContains(numbers, number => number = 4);
console.log(testContains)

// PRUEBA DE myWithout
console.log('Esta es la prueba de myWithout creando un nuevo arreglo sin los valores 2 y 3')
const testWithout = oliver.myWithout(numbers, '2,3');
console.log(testWithout)

// PRUEBA DE myPluck
const autos = [
    {
        marca: 'Toyota', 
        color: 'rojo'
    },
    {
        marca:'BMW',
        color: 'azul'
    },
    {
        marca: 'Kia',
        color: 'verde'
    },
    {
        marca: 'Chevrolet',
        color: 'blanco'
    },
    {
        marca: 'Ford',
        color: 'negro'
    },
]

console.log('Dado este arreglo llamados Autos ', autos)
console.log('Esta es la prueba de myPluck buscando valores "Marca" en ese arreglo de autos')
console.log(oliver.myPluck(autos,'color'))