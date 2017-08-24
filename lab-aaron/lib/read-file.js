'use strict';

let yoda = module.exports = {};

const fs = require('fs');

yoda.read = (callback) => {
  let first, second, third;

  fs.readFile(`${__dirname}/../assets/one.txt`, (err, data) => {
    if(err) console.error(err);
    first = data.toString('hex', 0, 8);

    fs.readFile(`${__dirname}/../assets/two.txt`, (err, data) => {
      if(err) console.error(err);
      second = data.toString('hex', 0, 8);

      fs.readFile(`${__dirname}/../assets/three.txt`, (err, data) => {
        if(err) console.error(err);
        third = data.toString('hex', 0, 8);

        callback({first, second, third});
      });
    });
  });
};
