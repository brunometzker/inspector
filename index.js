const isOfType = (value, type) => {
    return typeof value === type;
}

const stringMatches = (value, pattern) => {
    if(!isOfType(value, 'string') || !(pattern instanceof RegExp)) {
        return false;
    }

    return pattern.test(value);
}

module.exports.isOfType = isOfType;
module.exports.stringMatches = stringMatches;