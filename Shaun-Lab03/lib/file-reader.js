'use-strict';

// module.exports = exports = {};
//
// const fs = require('fs');
//
// console.log(`current dir: ${__dirname}`);
//
// const fileReader = module.exports = function(paths, callback){
//   let buffers = [];
//   fs.readFile(paths[0], function(err, data){
//     if (err) return callback(err);
//     buffers.push(data.toString('hex', 0, 8));
//
//     fs.readFile(paths[1], function(err, data){
//       if (err) return callback(err);
//       buffers.push(data.toString('hex', 0, 8));
//
//       fs.readFile(paths[2], function(err, data){
//         if (err) return callback(err);
//         buffers.push(data.toString('hex', 0, 8));
//         return callback(null, buffers);
//       });
//     });
//   });
// };

const yolo = module.exports = {};

const fs = require('fs');



yolo.read = (callback) => {
  let first, second, third;

  fs.readFile(`${__dirname}/../assets/one.txt`, (err, data) => {
    if(err) console.error(err);
    first = data.toString('utf-8', 0, 8);


    fs.readFile(`${__dirname}/../assets/two.txt`, (err, data) => {
      if(err) console.error(err);
      second = data.toString('utf-8', 0, 8);


      fs.readFile(`${__dirname}/../assets/three.txt`, (err, data) => {
        if(err) console.error(err);
        third = data.toString('utf-8', 0, 8);



        callback({first, second, third});

      });
    });
  });

};
