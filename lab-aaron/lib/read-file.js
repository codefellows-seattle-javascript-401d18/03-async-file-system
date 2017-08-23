'use strict';

const fs = require('fs');

let yoda = module.exports = {};

yoda.read = () => {
  let first, second, third;

  fs.readFile(`${__dirname}/../assets/one.txt`, (err, data) => {
    if(err) console.error(err);
    console.log('one.txt', data.toString('utf-8', 0, 18));
    first = data.toString('utf-8', 0, 18);

    fs.readFile(`${__dirname}/../assets/two.txt`, (err, data) => {
      if(err) console.error(err);
      console.log('two.txt', data.toString('utf-8', 0, 18));
      second = data.toString('utf-8', 0, 18);

      fs.readFile(`${__dirname}/../assets/three.txt`, (err, data) => {
        if(err) console.error(err);
        console.log('three.txt', data.toString('utf-8', 0, 18));
        third = data.toString('utf-8', 0, 18);

        return console.log(first, second, third, 'This is the return');
      });
    });
  });
};

yoda.read();
