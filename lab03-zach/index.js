'use strict';

const fs = require('fs');

let z = module.exports = {};
console.log(`${__dirname}`);

z.readAssets = () => {
  let assetOne = 1;
  let assetTwo = 2;
  let assetThree = 3;

  z.readOne = () => {
    fs.readFile(`${__dirname}/../assets/one.txt`, (err, data) => {
      if (err) {console.err(err);}
      console.log(data.toString('utf-8'));
      assetOne = (data.toString('utf-8'));
    });

    z.readTwo = () => {
      fs.readFile(`${__dirname}/../assets/two.txt`, (err, data) => {
        if (err) {console.err(err);}
        console.log(data.toString('utf-8'));
        assetTwo = (data.toString('utf-8'));
      });
    };

    z.readThree = () => {
      fs.readFile(`${__dirname}/../assets/three.txt`, (err, data) => {
        if (err) {console.err(err);}
        console.log(data.toString('utf-8'));
        assetThree = (data.toString());
      });
    };
    return assetOne, assetTwo, assetThree;
  };
};

z.showAssets = () => {console.log(assetOne, assetTwo, assetThree); return assetOne, assetTwo, assetThree;};
z.showAssets();
z.readAssets();
