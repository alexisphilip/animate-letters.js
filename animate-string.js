/**
 * Animates a string on hover.
 */
class AnimateString {
    /**
     * Global animation object for the `Element.animate` interface.
     * @var {object[]}
     */
    static animationObject = [
        {
            transform: "rotate(-7deg) scale(1.02)",
            color: "tomato",
            offset: 0.5
        },
        {
            transform: "rotate(0deg) scale(1)",
            color: "unset",
            offset: 1,
        }
    ];
    /**
     * Global animation duration in milliseconds for the `Element.animate` interface.
     * @var {number}
     * @default 600
     */
    static animationDuration = 600;

    /**
     * Each constructor call will transform and trigger animations on "mouseover" on the given elements.
     * @param {HTMLElement[]} stringEls Array of HTML elements which text content will be animated.
     * @param {object[]|null} [animationObject=null] Current instance's animation object for the `Element.animate` interface. 
     * @param {number|null} [animationDuration=null] Current instance's animation duration for the `Element.animate` interface.
     */
    constructor(stringEls, animationObject = null, animationDuration = null) {

        let currentAnimationObject,
            currentAnimationDuration;

        if (!!animationObject) {
            currentAnimationObject = animationObject;
        } else {
            currentAnimationObject = AnimateString.animationObject;
        }

        if (!!animationDuration) {
            currentAnimationDuration = animationDuration;
        } else {
            currentAnimationDuration = AnimateString.animationDuration;
        }

        this.transformStrings(stringEls, currentAnimationObject, currentAnimationDuration);
    }

    /**
     * Transforms and triggers animations on "mouseover" on the given elements.
     * @param {HTMLElement[]} stringEls Array of HTML elements which text content will be animated.
     */
    transformStrings(stringEls, currentAnimationObject, currentAnimationDuration) {

        // For each string elements to animate.
        for (const stringEl of stringEls) {
            
            let newContent = "";

            // For each words in the string.
            for (let wordStr of stringEl.textContent.split(" ")) {
                // In the word string, wraps each character in a span element.
                wordStr = wordStr.replace(/\S/g, "<span class='animate-string-char'>$&</span>");
                // Wraps the word string in a span element.
                newContent += `<span style="display: inline-flex;">${wordStr}</span> `;
            }
            
            // Replaces the HTML content of the string by the new transformed HTML content.
            stringEl.innerHTML = newContent;

            // Selects the span elements which will be animated.
            const charEls = stringEl.querySelectorAll(".animate-string-char");

            // For each characters (span elements) to animate.
            for (const charEl of charEls) {
                // Adds a "mouseover" listener on the character element.
                charEl.addEventListener("mouseover", (e) => {
                    // Triggers an animation on the character element.
                    e.currentTarget.animate(currentAnimationObject, currentAnimationDuration);
                });
            }
        }
    }
}
