'use-strict';
const readFile = require('../lib/read')
const fs = require('fs')


describe('Sample FS Model', function() {
  test('Should return matching data from read.js', done => {
    let first1, second2, third3

    fs.readFile(`${__dirname}/../assets/one.txt`, (err, data) => {
      if (err) console.error(err);
      first1 = data.toString('utf-8', 0, 8)
    });

    fs.readFile(`${__dirname}/../assets/two.txt`, (err, data) => {
      if (err) console.error(err);
      second2 = data.toString('utf-8', 0, 8)
    })

    fs.readFile(`${__dirname}/../assets/three.txt`, (err, data) => {
      if (err) console.error(err);
      third3 = data.toString('utf-8', 0, 8)
    })

    readFile.read( (data) => {
      expect([data.second, data.first, data.third]).toEqual([second2, first1, third3]);
      console.log(data.first, data.second, data.third)
      done()
    })
  })

  test('Testing for an incorrect file path', done => {
    let faker;
    fs.readFile(`${__dirname}/../fakefolder/fakefile.txt`, (err, data) => {
      if(err) console.error(err);
      faker = data.toString('hex', 0, 8);
    });
    expect(faker).toBeUndefined();
    done();
  });
});
