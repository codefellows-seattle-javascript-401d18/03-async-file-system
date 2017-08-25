'use strict';

const fs = require('fs');

let txtOrder = module.exports = {};

txtOrder.read = (callback) => {

  let first, second, third;

  fs.readFile(`${__dirname}/../assests/one.txt`, (err, data) => {
    if(err) console.error(err);
    first = data.toString('hex', 0, 8);
    console.log('first:', first);

    fs.readFile(`${__dirname}/../assests/two.txt`, (err, data) => {
      if(err) console.error(err);
      second = data.toString('hex', 0, 8);
      console.log('second:', second);

      fs.readFile(`${__dirname}/../assests/three.txt`, (err, data) => {
        if(err) console.error(err);
        third = data.toString('hex', 0, 8);
        console.log('third:', third);
        callback({first, second, third});
      });
    });
  });
};
