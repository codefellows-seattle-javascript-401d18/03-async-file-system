'use strict';

const readFile = require('../lib/read-file');
const fs = require('fs');

describe('my fs module', function() {
  test('should return some data', done => {
    let first1, second2, third3;

    fs.readFile(`${__dirname}/../data/one.txt`, (err, data) => {
      if(err) console.error(err);
      first1 = data.toString('hex', 0, 8);

    });
    fs.readFile(`${__dirname}/../data/two.txt`, (err, data) => {
      if(err) console.error(err);
      second2 = data.toString('hex', 0, 8);
    });
    fs.readFile(`${__dirname}/../data/three.txt`, (err, data) => {
      if(err) console.error(err);
      third3 = data.toString('hex', 0, 8);
    });

    readFile.read((data) => {
      let odata = [data.first, data.second, data.third];
      let ndata = [first1, second2, third3];
      expect (odata).toEqual(ndata);
      expect([data.second, data.first, data.third]).toEqual([second2, first1, third3]);
      done();
    });
  });
  test('Testing for improper file path:', done => {
    let badpath;
    fs.readFile(`${__dirname}/../data/four.txt`, (err, data)=> {
      if(err) console.error(err);
      badpath = data.toString('hex', 0, 8);
    });
    expect(badpath).toBeUndefined();
    done();
  });
});
