/**
 * 
 * @param {*} value
 * @param {*} type
 * @returns {boolean}
 * 
 * Returns true if value is an instance of the specified built-in type
 */
const isOfType = (value, type) => {
    return typeof value === type;
};

/**
 * 
 * @param {*} value 
 * @param {*} properties
 * @returns {boolean}
 * 
 * Returns true if value is an object with own properties matching the desired properties.
 */

const hasAllOwnProperties = (value, properties) => {
    return (value !== null && isOfType(value, 'object') && isObjectOfType(properties, Array)) 
        && properties.every(property => Object.getOwnPropertyNames(value).includes(property));
};

const isObjectOfType = (value, type) => {
    return isOfType(value, 'object') && value instanceof type;
};

module.exports.isOfType = isOfType;
module.exports.hasAllOwnProperties = hasAllOwnProperties;
module.exports.isObjectOfType = isObjectOfType;