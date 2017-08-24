'use strict';

const reading = require('../lib/read');
const fs = require('fs');

describe('index.js', function () {
  describe('Should show in numerical order', () => {
    test('Should be 1, 2, 3!', done => {
      let first1, second2, third3;

      fs.readFile(`${__dirname}/../assets/one.txt`, (err, data) => {
        if (err) console.error(err);
        first1 = data.toString('hex',0 ,8);
      });

      fs.readFile(`${__dirname}/../assets/two.txt`, (err, data) => {
        if (err) console.error(err);
        second2 = data.toString('hex', 0, 8);
      });

      fs.readFile(`${__dirname}/../assets/three.txt`, (err, data) => {
        if (err) console.error(err);
        third3 = data.toString('hex', 0, 8);
      });
      reading.readAssets( (data) => {
        expect([data.first , data.second, data.third]).toEqual([first1, second2, third3]);
        console.log(data.third);
        done();
      });
    });
  });
});

test('should give undefined', done => {
  let badPath;
  fs.readFile(`${__dirname}/../assets/nine.txt`, (err, data) => {
    if (err) console.error(err);
    badPath = data.toString('hex', 0, 8);
  });
  expect(badPath).toBeUndefined();
  done();
});
