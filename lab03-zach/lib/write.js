'use strict';

const fs = require('fs');

let bah = module.exports = {};

bah.overwrite = () => {
  fs.writeFile(`${__dirname}/../assets/one.txt`, 'Hello One!', (err) => {
    if (err) console.err(err);
    console.log('Did this overwrite?');
    fs.writeFile(`${__dirname}/../assets/two.txt`, 'Hello Two!', (err) => {
      if (err) console.err(err);
      console.log('Overwrite 2, Electric Boogaloo');
      fs.writeFile(`${__dirname}/../assets/three.txt`, 'Hello Three!', (err) => {
        if (err) console.err(err);
        console.log('Overwrite 3, not nearly as fun as Overwatch.');
      });
    });
  });
};

bah.overwrite();
