# Lab 3: Asynchronous File Processing

## About this lab

This lab is day 3 lab from Code Fellows 401 JS class.  In this lab we use the Node.js FS module to work with three sample txt files.  Using asynchronous 'read file' method we read the files and logged the hex code of the txt files in order. This was accomplished by neatly nesting the 'read file' functions and using callbacks we were able to pass that information off to be tested.  The tests checked to make sure that the files were read in order and we also tested that file paths were valid.

## Using done() in jest

Jest.js testing framework provides an argument done() that will wait until the done callback is called before finishing a test. This is helpful in the asynchronous nature of JS.

Here is additional documentation regarding done() in jest.
https://facebook.github.io/jest/docs/asynchronous.html
