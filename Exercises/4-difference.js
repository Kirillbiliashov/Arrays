'use strict';

// Find difference of two arrays
// elements from array1 that are not includes in array2

const difference = (array1, array2) => {
    const copy = [];
   array1.map(elem => {
        if (!array2.includes(elem)) {
            copy.push(elem)
        } 
    }); 
  return copy
}

//This function could also be implemented in one line using array1.filter() but in that case solution was too short

module.exports = { difference };
