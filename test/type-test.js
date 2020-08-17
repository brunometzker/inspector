const { expect } = require('chai');
const inspector = require('../index');

describe('Type Module Suite', () => {
    describe('isOfType', () => {
        it('should return true when value is of supplied type', () => {
            const type = 'string';
            const value = 'some string';
            
            expect(inspector.type.isOfType(value, type)).to.be.true;
        });
    
        it('should return false when value is not of supplied type', () => {
            const type = 'object';
            const value = 1;
    
            expect(inspector.type.isOfType(value, type)).to.be.false;
        });
    
        it('should return false when type is not a string', () => {
            const type = { propA: 'a' };
            const value = { propA: 'a' };
    
            expect(inspector.type.isOfType(value, type)).to.be.false;
        });
    
        it('should return true when value is null and type is \'object\'', () => {
            const type = 'object';
            const value = null;
    
            expect(inspector.type.isOfType(value, type)).to.be.true;
        });
    
        it('should return true when value is undefined and type is \'undefined\'', () => {
            const type = 'undefined';
            const value = undefined;
    
            expect(inspector.type.isOfType(value, type)).to.be.true;
        });
    });

    describe('isObjectOfType', () => {
        it('should return false when value is a built in type other than object', () => {
            const value = 'some string';
            const type = String;
            
            expect(inspector.type.isObjectOfType(value, type)).to.be.false;
        });

        it('should return false when value is null', () => {
            const value = null;
            const type = Array;

            expect(inspector.type.isObjectOfType(value, type)).to.be.false;
        });

        it('should return false when value is undefined', () => {
            const value = undefined;
            const type = Array;

            expect(inspector.type.isObjectOfType(value, type)).to.be.false;
        });

        it('should return false when value is an object but not an instance of provided type', () => {
            const value = [];
            const type = Promise;

            expect(inspector.type.isObjectOfType(value, type)).to.be.false;
        });

        it('should return true when value is an object and instance of the provided type', () => {
            const value = [];
            const type = Array;

            expect(inspector.type.isObjectOfType(value, type)).to.be.true;
        });
    });

    describe('hasAllOwnProperties', () => {
        it('should return false when value is null', () => {
            const value = null;
            const properties = ['a', 'b'];

            expect(inspector.type.hasAllOwnProperties(value, properties)).to.be.false;
        });

        it('should return false when value is undefined', () => {
            const value = undefined;
            const properties = ['a', 'b'];

            expect(inspector.type.hasAllOwnProperties(value, properties)).to.be.false;
        });

        it('should return false when value is not an object', () => {
            const value = [];
            const properties = ['a', 'b'];

            expect(inspector.type.hasAllOwnProperties(value, properties)).to.be.false;
        });

        it('should return false when properties is not an array', () => {
            const value = { a: 'a', b: 'b' };
            const properties = 'a';

            expect(inspector.type.hasAllOwnProperties(value, properties)).to.be.false;
        });

        it('should return false when properties is null', () => {
            const value = { a: 'a', b: 'b' };
            const properties = null;

            expect(inspector.type.hasAllOwnProperties(value, properties)).to.be.false;
        });

        it('should return false when properties is undefined', () => {
            const value = { a: 'a', b: 'b' };
            const properties = undefined;

            expect(inspector.type.hasAllOwnProperties(value, properties)).to.be.false;
        });

        it('should return false when object does not have all expected properties', () => {
            const value = { a: 'a', b: 'b' };
            const properties = ['a', 'b', 'c'];

            expect(inspector.type.hasAllOwnProperties(value, properties)).to.be.false;
        });

        it('should return true when object has all expected properties', () => {
            const value = { a: 'a', b: 'b' };
            const properties = ['a', 'b'];

            expect(inspector.type.hasAllOwnProperties(value, properties)).to.be.true;
        });
    });
});