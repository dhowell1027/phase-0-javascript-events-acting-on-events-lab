// Your code here
// Get the dodger element
const dodger = document.getElementById('dodger');

// Add an event listener to listen for the right arrow key
document.addEventListener('keydown', function (e) {
  if (e.key === 'ArrowLeft') {
    moveDodgerLeft();
  } else if (e.key === 'ArrowRight') {
    moveDodgerRight();
  }
});

// Function to move the dodger to the left
function moveDodgerLeft() {
  // Get the current left position of the dodger
  let left = dodger.style.left;
  left = parseInt(left) || 0; // Parse the left value as an integer or default to 0

  // Check if the dodger is not at the left edge
  if (left > 0) {
    // Move the dodger to the left by 1 pixel
    dodger.style.left = `${left - 1}px`;
  }
}

// Function to move the dodger to the right
function moveDodgerRight() {
  // Get the current left position of the dodger
  let left = dodger.style.left;
  left = parseInt(left) || 0; // Parse the left value as an integer or default to 0

  // Get the current width of the dodger
  let dodgerWidth = dodger.offsetWidth;

  // Check if the dodger is not at the right edge
  if (left < window.innerWidth - dodgerWidth) {
    // Move the dodger to the right by 1 pixel
    dodger.style.left = `${left + 1}px`;
  }
}
