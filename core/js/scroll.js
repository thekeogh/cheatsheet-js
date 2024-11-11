// Track drag state and initial position
let isDragging = false;
let startX, startY, scrollLeft, scrollTop;

/**
 * Enables screen panning and horizontal scrolling.
 *
 * @remarks
 * Provides two scrolling modes:
 * 1. Default mode: Click and drag to pan the viewport in any direction
 * 2. Shift mode: Holding Shift enables normal vertical scrolling with mouse wheel
 */
document.addEventListener("mousedown", (event) => {
  if (event.shiftKey) return; // Don"t initiate drag if Shift is pressed
  
  isDragging = true;
  document.body.classList.add("is-panning");
  startX = event.pageX - window.scrollX;
  startY = event.pageY - window.scrollY;
  scrollLeft = window.scrollX;
  scrollTop = window.scrollY;
});

document.addEventListener("mousemove", (event) => {
  if (!isDragging || event.shiftKey) {
    isDragging = false;
    document.body.classList.remove("is-panning");
    return;
  }
  
  event.preventDefault();
  const x = event.pageX - window.scrollX;
  const y = event.pageY - window.scrollY;
  const moveX = x - startX;
  const moveY = y - startY;
  
  window.scrollTo({
    left: scrollLeft - moveX,
    top: scrollTop - moveY,
    behavior: "instant"
  });
});

document.addEventListener("mouseup", () => {
  isDragging = false;
  document.body.classList.remove("is-panning");
});

// Prevent text selection while panning
document.addEventListener("selectstart", (event) => {
  if (isDragging) {
    event.preventDefault();
  }
});
