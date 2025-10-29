
const getElement = (selector) => document.querySelector(selector);
const getAllElements = (selector) => document.querySelectorAll(selector);

const counterElements = getAllElements('.peopleand-text h5');
const countDuration = 2000; 

/**

 * @param {Element} element -
 * @param {string} finalValue - 
 */
function animateCount(element, finalValue) {
    const startTimestamp = performance.now();
    
    const finalNumber = parseFloat(finalValue.replace('K', '')) * 1000;

    const step = (timestamp) => {
        const elapsed = timestamp - startTimestamp;
        const progress = Math.min(1, elapsed / countDuration);
        const currentValue = progress * finalNumber;

        const displayedValue = (currentValue / 1000).toFixed(1);
        element.textContent = displayedValue + 'K';

        if (progress < 1) {
            window.requestAnimationFrame(step);
        } else {
            element.textContent = finalValue; 
        }
    };

    window.requestAnimationFrame(step);
}

const counterObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            counterElements.forEach(counter => {
                const finalValue = counter.textContent.trim();
                animateCount(counter, finalValue);
            });
            observer.unobserve(entry.target);
        }
    });
}, { 
    threshold: 1
});
const counterContainer = getElement('.people');
if (counterContainer) {
    counterObserver.observe(counterContainer);
}