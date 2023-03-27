# animate-string.js

Animates a string on hover.

# Usage

```html
<h1 class="animate-me">I will be animated, just hover me.</h1>
<p class="animate-me">I will be <b><u>animated</u></b> too!</p>
```

```javascript
const myStringElements = document.querySelector(".animate-me");

new AnimateString(myStringElements);
```

## Options

- `animationKeyframes`: [`Keyframe`](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Keyframe_Formats) array for the [`Element.animate`](https://developer.mozilla.org/en-US/docs/Web/API/Element/animate) method which will be triggered on each character mouse over.
- `animationDuration`: in milliseconds.
- `onMouseover`: callback function triggered on each character mouse over.

### Global animation options

Animation options can be applied globally.

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

new AnimateString(myStringElements);
```

### Instance animation options

Animations options can be applied for an instance only.

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

new AnimateString(myStringElements, animationKeyframes, animationDuration, onMouseover);
```
