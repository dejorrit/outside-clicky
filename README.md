# Outside Clicky

Listen for clicks outside of an element

## Install

```bash
npm install outside-clicky --save
```
    
## Usage

### Basic usage

### Initializing OutsideClicky

```javascript
const OutsideClicky = require('outside-clicky');
    
let myDiv = document.querySelector('.js-myDiv');
let myCallbackFunction = function () {
	console.log('You clicked outside myDiv');
};
    
let myOC = new OutsideClicky();
```

### Binding the listener

```javascript
myOC.bind(myDiv, myCallbackFunction);
```

### Unbinding the listener

```javascript
myOC.unbind();
```

### Automatically unbind after outside click

```javascript
myOC.bind(myDiv, myCallbackFunction, true);
```