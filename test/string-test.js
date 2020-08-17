const { expect } = require('chai');
const inspector = require('../index');

describe('String Module Suite', () => {
    describe('stringMatches', () => {
        it('should return false when value is not a string', () => {
            const value = 1;
            const pattern = /\d/;
    
            expect(inspector.string.stringMatches(value, pattern)).to.be.false;
        });
    
        it('should return false when pattern is not a \'RegExp\'', () => {
            const value = 'some string';
            const pattern = '\w+';
    
            expect(inspector.string.stringMatches(value, pattern)).to.be.false;
        });
    
        it('should return false when string does not match pattern', () => {
            const value = 'a string';
            const pattern = /\d+/;
    
            expect(inspector.string.stringMatches(value, pattern)).to.be.false;
        });
    
        it('should return true when string matches pattern', () => {
            const value = 'a string with a number: 1';
            const pattern = /\d+/;
    
            expect(inspector.string.stringMatches(value, pattern)).to.be.true;
        });
    
        it('should return false when string is null', () => {
            const value = null;
            const pattern = /\d+/;
    
            expect(inspector.string.stringMatches(value, pattern)).to.be.false;
        });
    
        it('should return false when string is undefined', () => {
            const value = undefined;
            const pattern = /\d+/;
    
            expect(inspector.string.stringMatches(value, pattern)).to.be.false;
        });
    
        it('should return false when pattern is null', () => {
            const value = 'some string';
            const pattern = null;
    
            expect(inspector.string.stringMatches(value, pattern)).to.be.false;
        });
    
        it('should return false when pattern is undefined', () => {
            const value = 'some string';
            const pattern = undefined;
    
            expect(inspector.string.stringMatches(value, pattern)).to.be.false;
        });
    });
});