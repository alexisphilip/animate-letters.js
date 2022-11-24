# animate-string.js

Animates a string on hover.

# Usage

```html
<h1 class="animate-me">I will be animated, just hover me.</h1>
<p class="animate-me">I want to be animated too!</p>
```

```javascript
const myStringElements = document.querySelector(".animate me");

new AnimateString(myStringElements);
```

## Options

### Global animation options

Animation options can be given globally.

```javascript
AnimateString.animationObject = [
    {opacity: 1},
    {opacity: 0},
    {opacity: 1},
];
AnimateString.animationDuration = 500;

new AnimateString(myStringElements);
```

### Instance animation options

Animations options can be given for an instance only.

```javascript
const animationObject = [
    {opacity: 1},
    {opacity: 0},
    {opacity: 1},
];
const animationDuration = 500;

new AnimateString(myStringElements, animationObject, animationDuration);
```

# Disclaimer

**Important**: all inner HTML (and its style) will be removed from the targeted element(s). Only `textContent` will remain. As of now, I couldn't manage transforming only the text and keeping all inner HTML structure recursively.

Input:

```html
<p>This <i>is</i> a <span style="font-weight: bold;">bold</span> text.</p>
```

Output: (**keep in mind that each character is wrapped in a `<span>` element when outputted**)

```html
<p>This is a bold text.</p>
```