/**
 * Checks object property nesting to determine if property exists
 * @param {object} object haystack to search
 * @param {string} keys needles to search for in haystack
 * @returns {boolean} are all the needles found
 */
exports.validChain = function( object, keys ) {
    return keys.split('.').reduce( ( obj, key ) => ( obj || { } )[ key ], object ) !== undefined;
};
