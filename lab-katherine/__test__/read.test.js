'use-strict';
const bark = require('../lib/read');
const fs = require('fs');


describe('My FS module', function() {
  test('should return files in correct order', done => {
    let first1, second2, third3;

    fs.readFile(`${__dirname}/../assets/one.txt`, (err, data) => {
      if (err) console.error(err);
      first1 = data.toString('hex', 0, 8);
    });

    fs.readFile(`${__dirname}/../assets/two.txt`, (err, data) => {
      if (err) console.error(err);
      second2 = data.toString('hex', 0, 8);
    });

    fs.readFile(`${__dirname}/../assets/three.txt`, (err, data) => {
      if (err) console.error(err);
      third3 = data.toString('hex', 0, 8);
    });

    bark.readThing( (data) => {
      let dataOG = [data.first, data.second, data.third];
      let dataNew = [first1, second2, third3];
      console.log(dataOG, dataNew);
      expect(dataOG).toEqual(dataNew);
      done();
    });
  });
});
