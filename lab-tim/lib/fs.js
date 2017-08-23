'use strict';

const fs = require('fs');
const fileops = module.exports = {};
var fileText;

fileops.readThemFiles = () => {
  fs.readFile(`${__dirname}/../assets/one.txt`, (err, data) => {
    if(err) {
      console.error(err);
    }
    fileText = data.toString('utf-8', 0, 50);
    logFile();
    fs.readFile(`${__dirname}/../assets/two.txt`, (err, data) => {
      if(err) {
        console.error(err);
      }
      fileText = data.toString('utf-8', 0, 50);
      logFile();
      fs.readFile(`${__dirname}/../assets/three.txt`, (err, data) => {
        if(err) {
          console.error(err);
        }
        fileText = data.toString('utf-8', 0, 50);
        logFile();
      })
    })
  })
}

function logFile() {
  console.log(fileText);
}

fileops.readThemFiles();
