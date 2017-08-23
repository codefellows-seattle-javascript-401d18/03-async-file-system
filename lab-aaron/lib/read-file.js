'use strict';

const fs = require('fs');

let yoda = module.exports = {};

yoda.read = (callback) => {
  let first, second, third;

  fs.readFile(`${__dirname}/../assets/one.txt`, (err, data) => {
    if(err) console.error(err);
    console.log('one.txt', data.toString('hex', 0, 8));
    first = data.toString('hex', 0, 8);

    fs.readFile(`${__dirname}/../assets/two.txt`, (err, data) => {
      if(err) console.error(err);
      console.log('two.txt', data.toString('hex', 0, 8));
      second = data.toString('hex', 0, 8);

      fs.readFile(`${__dirname}/../assets/three.txt`, (err, data) => {
        if(err) console.error(err);
        console.log('three.txt', data.toString('hex', 0, 8));
        third = data.toString('hex', 0, 8);

        return console.log(first, second, third, 'This is the return');
      });
      callback({first, second, third});
    });
  });
};

// yoda.read();
