'use strict';



const unique = (array) => {
const copy = array;
for (const value of copy) {
    const lIndex = copy.lastIndexOf(value);
    if (copy.indexOf(value) !== lIndex) {
        copy.splice(lIndex, 1)
    }
}
return copy;
};

module.exports = { unique };
