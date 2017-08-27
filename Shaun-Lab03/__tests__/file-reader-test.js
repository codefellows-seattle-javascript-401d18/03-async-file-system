'use strict';

const file = require('../lib/file');

describe('Testing file.js', () => {
  describe('#readThemFiles', () => {
    test('Should return hex in correct order' , (done) => {
      let filePaths = [
        `${__dirname}/../assets/one.txt`,
        `${__dirname}/../assets/two.txt`,
        `${__dirname}/../assets/three.txt`
      ];
      file.readThemFiles(filePaths, (err, data) => {
        expect(err).toBeNull();
        expect(Array.isArray([data])).toBe(true);
        expect(data).toEqual(['312e20284c415247','322e20284d454449','332e2028534d414c']);
        done();
      });
    });
    test('Should return an error', (done) => {
      file.readThemFiles(`${__dirname}/../assets/four.txt`, (err) => {
        expect(err).toEqual('ERROR');
        done();
      });
    });
  });
});
