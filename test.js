let gpa = require('./index.js');
let assert = require('assert');

describe('check gpa', () => {
    it('grade to number', () => {
        assert.equal(gpa('A+'), 17);
    });

    it('number to grade', () => {
        assert.equal(gpa(17), 'A+');
    });

    it('empty value', () => {
        assert.equal(gpa(''), -1);
    });

    it('number to grade', () => {
        assert.equal(gpa(78), '');
    });
});
