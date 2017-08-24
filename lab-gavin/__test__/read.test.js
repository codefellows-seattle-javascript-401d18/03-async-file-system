'use-strict';
const bark = require('../lib/read');
const fs = require('fs');


describe('My FS module', function() {
  test('Should return matching data from read.js', done => {
    let first1, second2, third3;

    fs.readFile(`${__dirname}/../assets/one.txt`, (err, data) => {
      if (err) console.error(err);
      first1 = data.toString('utf-8', 0, 8);
    });

    fs.readFile(`${__dirname}/../assets/two.txt`, (err, data) => {
      if (err) console.error(err);

      second2 = data.toString('utf-8', 0, 8);
    });

    fs.readFile(`${__dirname}/../assets/three.txt`, (err, data) => {
      if (err) console.error(err);

      third3 = data.toString('utf-8', 0, 8);

    });


    bark.read( (data) => {
      // let odata = [data.first , data.second, data.third];
      // let ndata = [second2, first1, third3];
      // expect(odata).toEqual(ndata);

      //**********Both methods work

      expect([data.second, data.first, data.third]).toEqual([second2, first1, third3]);
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
