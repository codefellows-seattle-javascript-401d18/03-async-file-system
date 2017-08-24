'use strict';

const fs = require('fs');

let z = module.exports = {};
console.log(`${__dirname}`);

z.readAssets = (callback) => {
  let arr = [];
  let first, second, third;

  fs.readFile(`${__dirname}/../assets/three.txt`, (err, data) => {
    if(err) console.error(err);
    third = data.toString('hex', 0, 8);
    arr.push(third);

    fs.readFile(`${__dirname}/../assets/two.txt`, (err, data) => {
      if(err) console.error(err);
      second = data.toString('hex', 0, 8);
      arr.push(second);

      fs.readFile(`${__dirname}/../assets/one.txt`, (err, data) => {
        if(err) console.error(err);
        first = data.toString('hex', 0 , 8);
        arr.push(first);
        callback({first, second, third});
      });
    });
  });
};


//callback WHERE?

// let processFile = () => {};
