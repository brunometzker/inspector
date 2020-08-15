const validators = require('../src/validators');
const { expect } = require('chai');

describe('Validators Suite', () => {
    describe('isOfType', () => {
        it('should return true when value is of supplied type', () => {
            const type = 'string';
            const value = 'some string';
            
            expect(validators.isOfType(value, type)).to.be.true;
        });
    
        it('should return false when value is not of supplied type', () => {
            const type = 'object';
            const value = 1;
    
            expect(validators.isOfType(value, type)).to.be.false;
        });
    
        it('should return false when type is not a string', () => {
            const type = { propA: 'a' };
            const value = { propA: 'a' };
    
            expect(validators.isOfType(value, type)).to.be.false;
        });
    
        it('should return true when value is null and type is \'object\'', () => {
            const type = 'object';
            const value = null;
    
            expect(validators.isOfType(value, type)).to.be.true;
        });
    
        it('should return true when value is undefined and type is \'undefined\'', () => {
            const type = 'undefined';
            const value = undefined;
    
            expect(validators.isOfType(value, type)).to.be.true;
        });
    });

    describe('stringMatches', () => {
        it('should return false when value is not a string', () => {
            const value = 1;
            const pattern = /\d/;

            expect(validators.stringMatches(value, pattern)).to.be.false;
        });

        it('should return false when pattern is not a \'RegExp\'', () => {
            const value = 'some string';
            const pattern = '\w+';

            expect(validators.stringMatches(value, pattern)).to.be.false;
        });

        it('should return false when string does not match pattern', () => {
            const value = 'a string';
            const pattern = /\d+/;

            expect(validators.stringMatches(value, pattern)).to.be.false;
        });

        it('should return true when string matches pattern', () => {
            const value = 'a string with a number: 1';
            const pattern = /\d+/;

            expect(validators.stringMatches(value, pattern)).to.be.true;
        });

        it('should return false when string is null', () => {
            const value = null;
            const pattern = /\d+/;

            expect(validators.stringMatches(value, pattern)).to.be.false;
        });

        it('should return false when string is undefined', () => {
            const value = undefined;
            const pattern = /\d+/;

            expect(validators.stringMatches(value, pattern)).to.be.false;
        });

        it('should return false when pattern is null', () => {
            const value = 'some string';
            const pattern = null;

            expect(validators.stringMatches(value, pattern)).to.be.false;
        });

        it('should return false when pattern is undefined', () => {
            const value = 'some string';
            const pattern = undefined;

            expect(validators.stringMatches(value, pattern)).to.be.false;
        });
    });
});