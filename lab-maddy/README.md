## 03 lab- This lab is to practice event loops, asynchronous file systems, incorporating done() in jest callbacks, testing, binary...


1. npm init (for package.json)
2. npm install -D jest (to be able to test with jest and for node modules)
3. npm install -D eslint (to be able to )

4. In terminal navigate into lib folder then read-file.js then run- node read-file.js


Q: How to use `done` in jest callbacks?
A: done() is asynchronous. It tells the test block- don't continue on until this test is completed, everything has been run through the event loop, then you can be done, and move on to the next test.
