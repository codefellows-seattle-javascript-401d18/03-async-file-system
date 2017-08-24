// 'use strict';
//
// const fileReader = require('../lib/file-reader.js');
//
// describe('file reading module', () => {
//   describe('bad file path', () => {
//     test('should give an error', (done) => {
//       fileReader(`${__dirname}/bad-file.txt`, (err) => {
//         expect(err)toThrow('error');
//         done();
//       });
//     });
//   });
//
//   describe('Good path and data', () => {
//     test('should return hex numbers, ending in 73, 69, 65', (done) => {
//       let paths = [
//         `${__dirname}/../assets/one.txt`,
//         `${__dirname}/../assets/two.txt`,
//         `${__dirname}/../assets/three.txt`
//       ];
//       fileReader(paths, function(err, data){
//         expect(err)toBeNull(null);
//         expect(data).arrayContaining('paths');
//         expect(data).toEqual([ '4166746572746173', '5a6f6d6269652069', '4c6f72697a7a6c65']);
//         done();
//       });
//     });
//   });
// });

// [ '4166746572746173', '5a6f6d6269652069', '4c6f72697a7a6c65' ]


'use-strict';
// const bark = require('../lib/read');
// const fs = require('fs');
//
//
// describe('My FS module', function() {
//   test('should return some data', done => {
//     let first1, second2, third3;
//
//    fs.readFile(`${__dirname}/../assets/one.txt`, (err, data) => {
//       if (err) console.error(err);
//       first1 = data.toString('utf-8', 0, 8);
//     });
//
//    fs.readFile(`${__dirname}/../assets/two.txt`, (err, data) => {
//       if (err) console.error(err);
//
//      second2 = data.toString('utf-8', 0, 8);
//     });
//
//    fs.readFile(`${__dirname}/../assets/three.txt`, (err, data) => {
//       if (err) console.error(err);
//
//      third3 = data.toString('utf-8', 0, 8);
//     });
//
//
//    bark.read( (data) => {
//       // console.log(data.first , data.second, data.third);
//       // console.log(first1, second2, third3);
//       expect(data.first , data.second, data.third ).toEqual(first1, second2, third3);
//       done();
//     });
//   });
// });

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
