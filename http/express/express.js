const isContentTypeAccepted = (request, supportedContentTypes) => {
    if(!request) {
        throw new Error('Request must not be null or undefined');
    }

    const requestContentType = request.header('Content-Type');

    const doesServerSpecifiesAcceptedContentTypes = (supportedContentTypes) => {
        return supportedContentTypes !== null && supportedContentTypes !== undefined && supportedContentTypes.length > 0;
    };

    const isRequestContentTypeAmongstSupportedContentTypes = (requestContentType, supportedContentTypes) => {
        return supportedContentTypes.some(contentType => contentType === requestContentType);
    }

    return (requestContentType !== undefined && doesServerSpecifiesAcceptedContentTypes(supportedContentTypes))
        && isRequestContentTypeAmongstSupportedContentTypes(requestContentType, supportedContentTypes);
};

module.exports.isContentTypeAccepted = isContentTypeAccepted;