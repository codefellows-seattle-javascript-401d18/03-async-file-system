'use-strict';


module.exports = exports = {};

const fs = require('fs');

console.log(`current dir: ${__dirname}`);

exports.read = () => {
  let first, second;

  fs.readFile(`${__dirname}/../assets/two.txt`, (err, data) => {
    if(err) console.error(err);
    console.log('two.txt', data.toString('utf-8', 0, 8));
    first = data.toString('utf-8', 0, 18);
  });

  fs.readFile(`${__dirname}/../assets/one.txt`, (err, data) => {
    if(err) console.error(err);
    console.log('one.txt', data.toString('utf-8', 0, 8));
    second = data.toString('utf-8', 0, 18);
  });

  fs.readFile(`${__dirname}/../assets/three.txt`, (err, data) => {
    if(err) console.error(err);
    console.log('three.txt', data.toString('utf-8', 0, 8));
    second = data.toString('utf-8', 0, 18);
  });

  return {first, second};
};
