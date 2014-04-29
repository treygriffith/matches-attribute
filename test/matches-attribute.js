var matches = require('matches-attribute');
var domify = require('domify');
var assert = require('assert');


describe('Standard Matching', function(){

  it('should return the attribute passed', function () {
    var img = domify('<img src="cat.jpg" />');

    var attrs = matches(img, 'src');
    assert(attrs.length === 1);
    assert(attrs[0] === 'src');
  });

  it('should return false when the attribute does not exist', function () {
    var img = domify('<img src="cat.jpg" />');

    var attrs = matches(img, 'height');

    assert(attrs === false);
  });

});

describe('Wildcard Matching', function(){

  it('should return a single matched attribute', function () {
    var img = domify('<img src="cat.jpg" data-name="keyboard" />');

    var attrs = matches(img, 'data-*');
    assert(attrs.length === 1);
    assert(attrs[0] === 'data-name');
  });

  it('should return a group of matched attributes', function () {
    var img = domify('<img src="cat.jpg" data-name="keyboard" data-age="42" />');

    var attrs = matches(img, 'data-*');
    assert(attrs.length === 2);
    assert(~attrs.indexOf('data-name'));
    assert(~attrs.indexOf('data-age'));
  });

  it('should return false when the attribute does not exist', function () {
    var img = domify('<img src="cat.jpg" />');

    var attrs = matches(img, 'data-*');

    assert(attrs === false);
  });

});
