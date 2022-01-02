'use strict';

const unique = (array) => {
    const unique = [];
    for (const elem of array) {
        const idx = unique.indexOf(elem);
        if (idx === -1) unique.push(elem);
    }
    return unique;
};

module.exports = { unique };
