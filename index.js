/**
 * Module dependencies
 */
var matches = require('matches-selector');

/**
 * Exports
 */
module.exports = matchesAttribute;

/**
 * Find if an attribute name is present on an element
 * @param  {DOM} el   DOM node to test
 * @param  {String} attr Name of an attribute to test for. Supports * for a wildcard.
 * @return {Array | Boolean}      Array string names of the attributes found or false on failure.
 */
function matchesAttribute(el, attr) {

  // if there is no glob, we do a regular search
  if(!~attr.indexOf('*')) {

    if(matches(el, '[' + attr + ']')) {
      return [attr];
    }

    return false;
  }

  // get it ready to be a RE
  attr = '^' + attr.replace('*', '.+').replace('-', '\\-') + '$';
  var re = new RegExp(attr)
    , attrs = el.attributes
    , found = [];

  for(var i=0; i<attrs.length; i++) {
    if(re.test(attrs[i].nodeName)) {
      found.push(attrs[i].nodeName);
    }
  }

  return found.length ? found : false;
}
