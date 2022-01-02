'use strict';

const removeElements = (array, ...items) => {
  for (const item of items) {
    const i = array.indexOf(item);
    if (i !== -1) array.splice(i, 1);
  }
};

module.exports = { removeElements };
