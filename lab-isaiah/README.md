# Lab3 Docs:

####  All files & folders I added to this lab are under the folder lab-isaiah.

* Included the following required files and folders:
  * **README.md** (this file)
  * **.gitignore** (as provided)
  * **.eslintrc** (as provided)
  * **.eslintignore** (as provided)
  * **lib/** (contains <em>read-file.js</em>)
  * **\__test__/** (contains <em>read-file.test.js</em>)
  * Also included **package.json** & **node_modules**

#### Completed Feature Tasks:
Created three files: `'one.txt'`, `'two.txt'`, `'three.txt'`. Each file contains random <em>lorem ipsum</em>. Then created a function to read each of the three files and console.log the first 8 bytes ***(in hex)***. By nested the read functions within each read function, it ensured that the three files were read and logged in the order: `'one.txt'`, `'two.txt'`, `'three.txt'`.

#### Completed Testing:

Created Tests to fail first, then adjusted to pass. Modified test/functions to insure tests were sound and appropriate.

#### Using `done` in jest callbacks:

By passing `done` in as a parameter of the test and calling it at the end of the test, it ensures that jest waits until `done` is called before completing the test. If  `done` is not called then the test will fail. To read more about `done`, visit: https://facebook.github.io/jest/docs/asynchronous.html
