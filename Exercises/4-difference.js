'use strict';

// Find difference of two arrays
// elements from array1 that are not includes in array2

const difference = (array1, array2) => {
  const diff = [];
  array1.forEach(elem => {
    if (!array2.includes(elem)) diff.push(elem);
  });
  return diff;
}

//This function could also be implemented in one line using array1.filter() but in that case solution was too short

module.exports = { difference };
