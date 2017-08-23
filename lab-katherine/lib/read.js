'use strict'

const fs = require('fs')

let x = module.exports = {}

x.readThing = () =>{
  let first, second, third;
  fs.readFile(`${__dirname}/../assets/three.txt`, 'utf-8', function(err, data) {
    if (err) { throw err }
    console.log('one.txt', data.toString('utf-8', 0, 8))
    first = data.toString('utf-8', 0, 8)
    fs.readFile(`${__dirname}/../assets/one.txt`, 'utf-8', function(err, data) {
      if (err) { throw err }
      console.log('two.txt', data.toString('utf-8', 0, 8))
      second = data.toString('utf-8', 0, 8)
      fs.readFile(`${__dirname}/../assets/two.txt`, 'utf-8', function(err, data) {
        if (err) { throw err }
        console.log('three.txt', data.toString('utf-8', 0, 8))
        third = data.toString('utf-8', 0, 8)

        return console.log('this is the return', first, second, third);
      })
    })
  })
}

x.readThing();
