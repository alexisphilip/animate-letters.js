# animate-string.js

Animates a string on hover.

# Usage

```html
<h1>I will be animated, just hover me.</h1>
<p class="animate-me">I will be <b><u>animated</u></b> too!</p>
```

```javascript
const elements = document.querySelectorAll("h1, .animate-me");
new AnimateString(elements);
```

## Options

- `animationKeyframes`: [`Keyframe`](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Keyframe_Formats) array for the [`Element.animate`](https://developer.mozilla.org/en-US/docs/Web/API/Element/animate) method which will be triggered on each character mouse over.
- `animationDuration`: in milliseconds.
- `onMouseover`: callback function triggered on each character mouse over.

### Global animation options

Animation options will be applied for each next `AnimateString` call.

```javascript
AnimateString.animationKeyframes = [
    {opacity: 1},
    {opacity: 0},
    {opacity: 1},
];
AnimateString.animationDuration = 500;
AnimateString.onMouseover = (event) => {
    // ...
};

const elements = document.querySelectorAll("h1");
new AnimateString(elements);
```

### Instance animation options

Animations options will applied only for the given `AnimateString`.

```javascript
const animationKeyframes = [
    {opacity: 1},
    {opacity: 0},
    {opacity: 1},
];
const animationDuration = 500;
const onMouseover = (event) => {
    // ...
};

const elements = document.querySelectorAll("h1");
new AnimateString(elements, animationKeyframes, animationDuration, onMouseover);
```
