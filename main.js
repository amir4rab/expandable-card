const ogCard = document.getElementById('card');
const exCard = document.getElementById('expandableCard');
const close = document.getElementById('close');

/**
 * Generates required data for animation
 */
const updatePos = () => {
  const { top, left, width, height } = ogCard.getBoundingClientRect();

  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  // Data required to position the element
  exCard.style.setProperty('--top', `${top}px`);
  exCard.style.setProperty('--left', `${left}px`);

  // Data required to scale the element
  exCard.style.setProperty('--screen-width', `${screenWidth}`);
  exCard.style.setProperty('--screen-height', `${screenHeight}`);
  exCard.style.setProperty('--width', `${width}`);
  exCard.style.setProperty('--height', `${height}`);
};

/**
 * onExpand adds the required data to extendableCard.
 */
const onExpand = () => {
  updatePos();

  // Since we have to wait for the variables to be applied,
  // the states have to be updated on a next page render.
  // For this purpose  we add a timeout with 1ms timeout time.
  setTimeout(() => {
    // Setting data attributes on card elements
    exCard.setAttribute('data-state', 'expanded');
    ogCard.setAttribute('data-state', 'hidden');
  }, 1);
};

ogCard.addEventListener('click', onExpand);

/**
 * onShrinks shrinks down the card and hide it.
 */
const onShrink = () => {
  updatePos();

  exCard.setAttribute('data-state', 'shrink');

  setTimeout(() => {
    // Setting data attributes on card elements
    exCard.setAttribute('data-state', 'hidden');
    ogCard.setAttribute('data-state', 'visible');
  }, 300 + 1);
};

close.addEventListener('click', onShrink);
