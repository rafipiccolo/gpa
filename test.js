'use strict';

var gpa = require('./index.js');
var assert = require('assert');

describe('check gpa', function () {
    it('grade to number', function () {
        assert.equal(gpa('A+'), 17);
    });

    it('number to grade', function () {
        assert.equal(gpa(17), 'A+');
    });

    it('empty value', function () {
        assert.equal(gpa(''), -1);
    });

    it('number to grade', function () {
        assert.equal(gpa(78), '');
    });
});
