'use strict';

const fs = require('fs');
const stranger = module.exports = {};

stranger.read = (callback) => {
  let first, second, third;

  fs.readFile(`${__dirname}/../data/one.txt`, (err, data) => {
    if(err) console.error(err);
    first = data.toString('hex', 0, 8);

    fs.readFile(`${__dirname}/../data/two.txt`, (err, data) => {
      if(err) console.error(err);
      second = data.toString('hex', 0, 8);

      fs.readFile(`${__dirname}/../data/three.txt`, (err, data) => {
        if(err) console.error(err);
        third = data.toString('hex', 0, 8);
        callback({first, second, third});
      });
    });
  });
};
