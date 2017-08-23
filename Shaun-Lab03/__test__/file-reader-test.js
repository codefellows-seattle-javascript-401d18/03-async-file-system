'use strict';

const readFile = require('../lib/file-reader');


describe('File Reader Module', () => {
  test('with improper file path', () => {
    it('should return and error', done => {
      fileReader(`${__dirname}/not-a-file.txt`, err => {
        expect(err).toEqual('error');
        done();
      });
    });
  });


const readFile = require('../lib/read');

describe('readFile', () => {

});

console.log(readFile);
//     console.log(readFile.read());
//     done();
//   });
//
//   test('should return some data', done => {
//     console.log(readFile.read());
//     done();
//   });
//
//   test('should return some data', done => {
//     console.log(readFile.read());
//     done();
//   });
// });
