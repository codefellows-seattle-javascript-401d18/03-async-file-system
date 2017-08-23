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
      // console.log(data.first , data.second, data.third);
      // console.log(first1, second2, third3);
      expect(data.first + ' ' + data.second + ' ' + data.third).toEqual(first1 + ' ' + second2 + ' ' + third3);
      done();
    });
  });

  // test('Should throw error when bad filepath', => {
  //   expect(() => ?.toThrowError('Bad Filepath'))
  // })

});
