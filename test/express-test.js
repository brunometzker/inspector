const { expect } = require("chai");
const inspector = require('../index');
const sinon = require('sinon');

describe('HTTP Module Suite', () => {
    describe('ExpressJS', () => {
        it('should throw error when request is null', () => {
            const request = null;
            const supportedContentTypes = ['application/xml'];

            expect(() => inspector.http.express.isContentTypeAccepted(request, supportedContentTypes)).to.throw();
        });

        it('should throw error when request is undefined', () => {
            const request = undefined;
            const supportedContentTypes = ['application/xml'];

            expect(() => inspector.http.express.isContentTypeAccepted(request, supportedContentTypes)).to.throw();
        });

        it('should return false if request does not specify it\'s content type', () => {
            const request = { header: (name) => {} };
            const supportedContentTypes = ['application/xml'];

            sinon.stub(request, 'header').returns(undefined);

            expect(inspector.http.express.isContentTypeAccepted(request, supportedContentTypes)).to.be.false;
        });

        it('should return false if server\'s supported content types array is null', () => {
            const request = { header: (name) => {} };
            const supportedContentTypes = null;

            sinon.stub(request, 'header').returns('application/json');

            expect(inspector.http.express.isContentTypeAccepted(request, supportedContentTypes)).to.be.false;
        });

        it('should return false if server\'s supported content types array is undefined', () => {
            const request = { header: (name) => {} };
            const supportedContentTypes = undefined;

            sinon.stub(request, 'header').returns('application/json');

            expect(inspector.http.express.isContentTypeAccepted(request, supportedContentTypes)).to.be.false;
        });

        it('should return false if server\'s supported content types array is empty', () => {
            const request = { header: (name) => {} };
            const supportedContentTypes = [];

            sinon.stub(request, 'header').returns('application/json');

            expect(inspector.http.express.isContentTypeAccepted(request, supportedContentTypes)).to.be.false;
        });

        it('should return false if request\'s content type is not accepted by the server', () => {
            const request = { header: (name) => {} };
            const supportedContentTypes = ['application/xml'];

            sinon.stub(request, 'header').returns('application/json');

            expect(inspector.http.express.isContentTypeAccepted(request, supportedContentTypes)).to.be.false;
        });

        it('should return true if request\'s content type is accepted by the server', () => {
            const request = { header: (name) => {} };
            const supportedContentTypes = ['application/xml', 'application/json'];

            sinon.stub(request, 'header').returns('application/json');

            expect(inspector.http.express.isContentTypeAccepted(request, supportedContentTypes)).to.be.true;
        });
    })
});