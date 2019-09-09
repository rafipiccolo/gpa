# Description

This module gives a recapitulative of installed modules for auditing / updating.

Internally it executes :
- package vulnerabilities : "npm audit --json"
- package needing update : "npm outdated --json"
- duplicate content : "npm run jsinspect --reporter json"
- require tree (internal code)
- package size : "https://packagephobia.now.sh/ on each module of your package.json"
- package download count (popularity) : "https://api.npmjs.org/downloads/point/last-month/... on each module of your package.json"

# Install

Go into a node project and type the following :

    $> npm install gpa

# Exemple

    var gpa = require('gpa');

    console.log(gpa('A+')); // show : 17

    console.log(gpa(10)); // show : C

# Run

    $> node server.js

# correlation table

F- | 0
---|---
F  | 1
F+ | 2
E- | 3
E  | 4
E+ | 5
D- | 6
D  | 7
D+ | 8
C- | 9
C  | 10
C+ | 11
B- | 12
B  | 13
B+ | 14
A- | 15
A  | 16
A+ | 17
