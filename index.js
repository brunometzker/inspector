const isOfType = (value, type) => {
    return typeof value === type;
}

const stringMatches = (value, pattern) => {
    if(!isOfType(value, 'string') || !(pattern instanceof RegExp)) {
        return false;
    }

    return pattern.test(value);
}

const isObjectOfType = (value, type) => {
    return isOfType(value, 'object') && value instanceof type;
}

module.exports.isOfType = isOfType;
module.exports.stringMatches = stringMatches;
module.exports.isObjectOfType = isObjectOfType;