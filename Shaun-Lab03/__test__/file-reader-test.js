'use strict';

const fileReader = require('../lib/file-reader.js');

describe('file reading module', function(){
  describe('bad file path', function(){
    it('should give an error', function(done){
      fileReader(`${__dirname}/bad-file.txt`, function(err){
        expect(err)toThrow('error');
        done();
      });
    });
  });

  describe('Good path and data', function(){
    it('should return hex numbers, ending in 73, 69, 65', function(done){
      let paths = [
        `${__dirname}/../assets/one.txt`,
        `${__dirname}/../assets/two.txt`,
        `${__dirname}/../assets/three.txt`
      ];
      fileReader(paths, function(err, data){
        expect(err)toBeNull(null);
        expect(data).arrayContaining('paths');
        expect(data).toEqual([ '4166746572746173', '5a6f6d6269652069', '4c6f72697a7a6c65']);
        done();
      });
    });
  });
});

// [ '4166746572746173', '5a6f6d6269652069', '4c6f72697a7a6c65' ]
