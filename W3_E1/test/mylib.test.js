const { expect } = require('chai');
const mylib = require('../mylib');

describe('mylib test suite', () => {

    before(() => {
        console.log('--- Tests starting ---');
    });

    after(() => {
        console.log('--- Tests finished ---');
    });

    it('add should return sum', () => {
        expect(mylib.add(2, 3)).to.equal(5);
    });

    it('sub should return difference', () => {
        expect(mylib.sub(5, 3)).to.equal(2);
    });

    it('mul should return product', () => {
        expect(mylib.mul(4, 3)).to.equal(12);
    });

    it('div should return quotient', () => {
        expect(mylib.div(10, 2)).to.equal(5);
    });

    it('div by zero should throw error', () => {
        expect(() => mylib.div(5, 0)).to.throw('ZeroDivision');
    });

});
