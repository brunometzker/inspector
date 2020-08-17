const type = require('../type/type');

const stringMatches = (value, pattern) => {
    if(!type.isOfType(value, 'string') || !(pattern instanceof RegExp)) {
        return false;
    }

    return pattern.test(value);
};

module.exports.stringMatches = stringMatches;