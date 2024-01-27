
function debounce(func, delay) {
    let timer;

    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

// Example usage:
//const debouncedFunction = debounce(() => {
// Your function logic here
//}, 300);

// Attach the debounced function to an event handler
//element.addEventListener('event', debouncedFunction);



function throttle(func, delay) {
    let throttling = false;

    return function (...args) {
        if (!throttling) {
            func.apply(this, args);
            throttling = true;
            setTimeout(() => {
                throttling = false;
            }, delay);
        }
    };
}

/*
const throttledFunction = throttle(() => {
}, 300);
*/

// Attach the throttled function to an event handler
//element.addEventListener('event', throttledFunction);


export { debounce, throttle }
