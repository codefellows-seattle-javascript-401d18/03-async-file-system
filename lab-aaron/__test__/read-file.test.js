'use strict';

const readIt = require('../lib/read-file');
const fs = require('fs');

describe('Should show first 8 hex values from txt files', function() {
  test('Should return the first 8 hex characters', done => {
    let firsty, secondy, thirdy;

    fs.readFile(`${__dirname}/../assets/one.txt`, (err, data) => {
      if (err) console.error(err);
      firsty = data.toString('hex', 0, 8);
    });

    fs.readFile(`${__dirname}/../assets/two.txt`, (err, data) => {
      secondy = data.toString('hex', 0, 8);
    });

    fs.readFile(`${__dirname}/../assets/three.txt`, (err, data) => {
      thirdy = data.toString('hex', 0, 8);
    });

    readIt.read( (data) => {
      let odata = [data.first, data.second, data.third];
      let ndata = [firsty, secondy, thirdy];
      expect(odata).toEqual(ndata);
      console.log(data.first, data.second, data.third);
      console.log(firsty, secondy, thirdy);
      expect([data.first, data.second, data.third]).toEqual([firsty, secondy, thirdy]);

      done();
    });
  });
  test('Should come back undefined', done =>{
    let nope;
    fs.readFile(`${__dirname}/../assets/nope.txt`, (err, data) => {
      if(err) console.error(err);
      nope = data.toString('hex', 0, 8);
    });
    expect(nope).toBeUndefined();
    done();

  });
});
