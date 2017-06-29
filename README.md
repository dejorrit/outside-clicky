# OutsideClicky

Listen for clicks outside of an element

## Install

```bash
npm install outside-clicky --save
```
    
## Usage

### Initializing OutsideClicky

```javascript
// Require OutsideClicky
const OutsideClicky = require('outside-clicky');
    
// Get the target element 
let myDiv = document.querySelector('.js-myDiv');
    
// Create a callback function that runs when you click outside of your target element
let myCallbackFunction = function () {
	console.log('You clicked outside myDiv');
};
    
// Initialize OutsideClicky
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