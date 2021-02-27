const red = 'color: red;';
const blue = 'color: blue;';

/**
 * 
 * @param {string} color
 * @returns {ElementCSSInlineStyle} 
 */
const makeColorStyle = color=> `color:${color};`;

exports.red = red;
exports.blue = blue;
exports.makeColorStyle = makeColorStyle;
