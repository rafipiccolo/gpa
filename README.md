# Description

This module convert gpa between int and string value

# Install

Go into a node project and type the following :

    $> npm install gpa

# Exemple

    var gpa = require('gpa');

    console.log(gpa('A+')); // display : 17

    console.log(gpa(10)); // display : C

# Run

    $> node server.js

# correlation table

| grade | number |
| ----- | ------ |
| F-    | 0      |
| F     | 1      |
| F+    | 2      |
| E-    | 3      |
| E     | 4      |
| E+    | 5      |
| D-    | 6      |
| D     | 7      |
| D+    | 8      |
| C-    | 9      |
| C     | 10     |
| C+    | 11     |
| B-    | 12     |
| B     | 13     |
| B+    | 14     |
| A-    | 15     |
| A     | 16     |
| A+    | 17     |

edge cases :

    gpa('') => -1
    gpa(78) => ''
