const inspector = require('../index');
const { expect } = require('chai');

describe('Functions', () => {
    describe('isOfType', () => {
        it('should return true when value is of supplied type', () => {
            const type = 'string';
            const value = 'some string';
            
            expect(inspector.isOfType(value, type)).to.be.true;
        });
    
        it('should return false when value is not of supplied type', () => {
            const type = 'object';
            const value = 1;
    
            expect(inspector.isOfType(value, type)).to.be.false;
        });
    
        it('should return false when type is not a string', () => {
            const type = { propA: 'a' };
            const value = { propA: 'a' };
    
            expect(inspector.isOfType(value, type)).to.be.false;
        });
    
        it('should return true when value is null and type is \'object\'', () => {
            const type = 'object';
            const value = null;
    
            expect(inspector.isOfType(value, type)).to.be.true;
        });
    
        it('should return true when value is undefined and type is \'undefined\'', () => {
            const type = 'undefined';
            const value = undefined;
    
            expect(inspector.isOfType(value, type)).to.be.true;
        });
    });

    describe('stringMatches', () => {
        it('should return false when value is not a string', () => {
            const value = 1;
            const pattern = /\d/;

            expect(inspector.stringMatches(value, pattern)).to.be.false;
        });

        it('should return false when pattern is not a \'RegExp\'', () => {
            const value = 'some string';
            const pattern = '\w+';

            expect(inspector.stringMatches(value, pattern)).to.be.false;
        });

        it('should return false when string does not match pattern', () => {
            const value = 'a string';
            const pattern = /\d+/;

            expect(inspector.stringMatches(value, pattern)).to.be.false;
        });

        it('should return true when string matches pattern', () => {
            const value = 'a string with a number: 1';
            const pattern = /\d+/;

            expect(inspector.stringMatches(value, pattern)).to.be.true;
        });

        it('should return false when string is null', () => {
            const value = null;
            const pattern = /\d+/;

            expect(inspector.stringMatches(value, pattern)).to.be.false;
        });

        it('should return false when string is undefined', () => {
            const value = undefined;
            const pattern = /\d+/;

            expect(inspector.stringMatches(value, pattern)).to.be.false;
        });

        it('should return false when pattern is null', () => {
            const value = 'some string';
            const pattern = null;

            expect(inspector.stringMatches(value, pattern)).to.be.false;
        });

        it('should return false when pattern is undefined', () => {
            const value = 'some string';
            const pattern = undefined;

            expect(inspector.stringMatches(value, pattern)).to.be.false;
        });
    });

    describe('isObjectOfType', () => {
        it('should return false when value is a built in type other than object', () => {
            const value = 'some string';
            const type = String;
            
            expect(inspector.isObjectOfType(value, type)).to.be.false;
        });

        it('should return false when value is null', () => {
            const value = null;
            const type = Array;

            expect(inspector.isObjectOfType(value, type)).to.be.false;
        });

        it('should return false when value is undefined', () => {
            const value = undefined;
            const type = Array;

            expect(inspector.isObjectOfType(value, type)).to.be.false;
        });

        it('should return false when value is an object but not an instance of provided type', () => {
            const value = [];
            const type = Promise;

            expect(inspector.isObjectOfType(value, type)).to.be.false;
        });

        it('should return true when value is an object and instance of the provided type', () => {
            const value = [];
            const type = Array;

            expect(inspector.isObjectOfType(value, type)).to.be.true;
        });
    });
});