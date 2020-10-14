const oliver = {}

// ForEach

oliver.myEach = (array, callback) => {
  for (let i=0; i < array.length; i++) {
    callback (array[i]);
 }  
}

// Filter

oliver.myFilter = (array, callback) => {
    let nArray = []
    for(let i = 0; i < array.length; i++ ) {
      if(callback(array[i]) === true) {
          nArray.push(array[i]);
      }
  }
  return nArray;
}

// Map

oliver.myMap = (array, callback) => {
    let nArray = []
    for(let i = 0; i < array.length; i++ ){
      nArray.push(callback(array[i]));
    }
    return nArray;
}

// Find

oliver.myFind = (array, callback) => {
  for(let i = 0; i < array.length; i++ ) {
    if(callback(array[i])){
      return array[i];
    }  
  }
}

// FindIndex
oliver.myFindIndex = (array, callback) => {
  for(let i = 0; i < array.length; i++ ) {
    if(callback(array[i])){
      return i;
    }  
  }
  // Esto es porque la descripcion dice que si no encuentra 1 devuelve -1,por eso devuelvo eso si no se logra encontrar
 return -1;
}

//Contains
oliver.myContains = (array, callback) => {
  for(let i = 0; i < array.length; i++) {
    if(callback(array[i])) {
      return true;
    }
  }
return false;
}

// Without ESTE FUE EL QUE MAS ME COSTO!
oliver.myWithout = (array, values) => {
  let nArray = array;
  let temp = values.split(',');
  for(let i = 0; i < temp.length; i++ ){
    for(let j = 0; j < array.length; j++ ){
      if(temp[i]==array[j]){
        nArray.splice(j, 1)
      }
    }
  }
  return nArray;
}

// Pluck
oliver.myPluck= (array, value)=>{
  let nArray = [];
      for(let i = 0; i < array.length; i++) {
        nArray.push(array[i][value])
      }
return nArray;
}

export default oliver;