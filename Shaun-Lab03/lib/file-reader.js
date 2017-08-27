'use strict';

const fs = require('fs');
const readFile = module.exports = {};

readFile.readThemFiles = (filePaths, callback) => {
  let arrBuffer = [];

  fs.readFile(filePaths[0], (err, data) => {
    if(err) return callback('ERROR');
    arrBuffer.push(data.toString('hex', 0, 8));

    fs.readFile(filePaths[1], (err, data) => {
      if(err) return callback('ERROR');
      arrBuffer.push(data.toString('hex', 0, 8));

      fs.readFile(filePaths[2], (err, data) => {
        if(err) return callback('ERROR');

        arrBuffer.push(data.toString('hex', 0, 8));
        return callback(null, arrBuffer);
      });
    });
  });
};
