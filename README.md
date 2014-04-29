matches-attribute
=================

Match an element against an attribute name with wildcards.

```javascript
var matches = require('matches-attribute');

var el = domify("<div data-name='something' data-age='42'></div>");

matches(el, 'data-*'); // ["data-name", "data-age"]
```
