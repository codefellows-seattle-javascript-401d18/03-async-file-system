'use-strict';


const vegies = module.exports = {};
const fs = require('fs');

vegies.read = () => {
  // let first, second, third;

  fs.readFile(`${__dirname}/../assets/one.txt`, (err, data) => {
    if(err) console.error(err);
    let first = data.toString('hex', 0, 8);
    console.log('1st ', first);
    fs.readFile(`${__dirname}/../assets/two.txt`, (err, data) => {
      if(err) console.error(err);
      let second = data.toString('hex', 0, 8);
      console.log('2nd ', second);
      fs.readFile(`${__dirname}/../assets/three.txt`, (err, data) => {
        if(err) console.error(err);
        let third = data.toString('hex', 0, 8);
        console.log('3rd ', third);
        // callback({first, second, third});
      });
    });
  });
};
