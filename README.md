# babel-plugin-minify-boolean-cast

Turn boolean casts from Boolean(a) to !!a

## Example

**In**

```javascript
Boolean();
Boolean(1);
Boolean(a);
```

**Out**

```javascript
false;
!!1;
!!a;
```

## Installation

```sh
$ npm install babel-plugin-minify-boolean-cast
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "plugins": ["minify-boolean-cast"]
}
```

### Via CLI

```sh
$ babel --plugins minify-boolean-cast script.js
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  plugins: ["minify-boolean-cast"]
});
```
