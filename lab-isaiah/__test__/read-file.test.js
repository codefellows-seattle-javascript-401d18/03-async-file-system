'use strict';

const blah = require('../lib/read-file');
const fs = require('fs');

describe('Testing: read-file.js', function () {
  test('Should return matching data:', done => {
    let first1, second2, third3;

    fs.readFile(`${__dirname}/../assests/one.txt`, (err, data) => {
      if(err) console.error(err);
      first1 = data.toString('hex', 0, 8);
    });

    fs.readFile(`${__dirname}/../assests/two.txt`, (err, data) => {
      if(err) console.error(err);
      second2 = data.toString('hex', 0, 8);
    });
    fs.readFile(`${__dirname}/../assests/three.txt`, (err, data) => {
      if(err) console.error(err);
      third3 = data.toString('hex', 0, 8);
    });

    blah.read( (data) => {
      let originalD = [data.first, data.second, data.third];
      let newD = [first1, second2, third3];
      console.log(originalD);
      console.log(newD);
      expect(originalD).toEqual(newD);
      done();
    });
  });
  test('Testing for improper file path:', done => {
    let badpath;

    fs.readFile(`${__dirname}/../assests/four.txt`, (err, data) => {
      if(err) console.error(err);
      badpath = data.toString('hex', 0, 8);
    });
    console.log(badpath);
    expect(badpath).toBeUndefined();
    done();
  });
});
