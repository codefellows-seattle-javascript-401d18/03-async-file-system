
'use strict'

let read = require('../lib/read')

describe('read.js', function() {
  describe('my fs module', () => {
    test('should return some data', done => {
      console.log(read.readThing())
      done()
    })
  })
})
