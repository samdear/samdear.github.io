// Sample state data with placeholder images and alternate images
const states = [
  {
    name: "Florida",
    image: "/pookieILY/imgs/florida01.jpg",
    altImage: "/pookieILY/imgs/florida02.jpg",
  },
  {
    name: "New York",
    image: "/pookieILY/imgs/nyc01.jpg",
    altImage: "/pookieILY/imgs/nyc02.jpg",
  },
  {
    name: "Denver",
    image: "/pookieILY/imgs/denver01.jpeg",
    altImage: "/pookieILY/imgs/denver02.jpeg",
  },
  {
    name: "Greece",
    image: "https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg",
    altImage:
      "https://images.pexels.com/photos/164041/pexels-photo-164041.jpeg",
  },
  {
    name: "Italy",
    image: "https://images.pexels.com/photos/2064827/pexels-photo-2064827.jpeg",
    altImage:
      "https://images.pexels.com/photos/981682/pexels-photo-981682.jpeg",
  },
  {
    name: "South Korea",
    image: "https://images.pexels.com/photos/373290/pexels-photo-373290.jpeg",
    altImage:
      "https://images.pexels.com/photos/17949765/pexels-photo-17949765.jpeg",
  },
];

let currentZoomed = null;
let isFlipped = false;

function getRandomPosition() {
  const margin = 150;
  const x = Math.random() * (window.innerWidth - margin * 2) + margin;
  const y = Math.random() * (window.innerHeight - margin * 2) + margin;
  return { x, y };
}

function createStateElement(state) {
  const stateEl = document.createElement("div");
  stateEl.className = "state-image";
  stateEl.style.backgroundImage = `url(${state.image})`;
  stateEl.dataset.originalImage = state.image;
  stateEl.dataset.altImage = state.altImage;
  stateEl.dataset.name = state.name;

  const position = getRandomPosition();
  stateEl.style.left = position.x + "px";
  stateEl.style.top = position.y + "px";

  // Add label
  const label = document.createElement("div");
  label.className = "state-label";
  label.textContent = state.name;
  stateEl.appendChild(label);

  // Store original position
  stateEl.dataset.originalX = position.x;
  stateEl.dataset.originalY = position.y;

  return stateEl;
}

function zoomToCenter(element) {
  const overlay = document.querySelector(".overlay");

  currentZoomed = element;
  isFlipped = false;

  // Show overlay
  overlay.classList.add("active");

  // Zoom to center
  element.classList.add("zoomed");

  // Hide other elements
  document.querySelectorAll(".state-image").forEach((el) => {
    if (el !== element) {
      el.style.opacity = "0.3";
      el.style.pointerEvents = "none";
    }
  });
}

function flipImage(element) {
  if (!isFlipped) {
    // Flip to alternate image
    element.classList.add("flipped");
    setTimeout(() => {
      element.style.backgroundImage = `url(${element.dataset.altImage})`;
      element.classList.remove("flipped");
    }, 250);
    isFlipped = true;
  } else {
    // Flip back to original
    element.classList.add("flipped");
    setTimeout(() => {
      element.style.backgroundImage = `url(${element.dataset.originalImage})`;
      element.classList.remove("flipped");
    }, 250);
    isFlipped = false;
  }
}

function resetZoom() {
  if (!currentZoomed) return;

  const overlay = document.querySelector(".overlay");
  const element = currentZoomed;

  // Reset position and scale
  element.classList.remove("zoomed", "flipped");
  element.style.left = element.dataset.originalX + "px";
  element.style.top = element.dataset.originalY + "px";

  // Hide overlay
  overlay.classList.remove("active");

  // Show other elements
  document.querySelectorAll(".state-image").forEach((el) => {
    el.style.opacity = "1";
    el.style.pointerEvents = "auto";
  });

  // Reset image to original
  setTimeout(() => {
    element.style.backgroundImage = `url(${element.dataset.originalImage})`;
  }, 250);

  currentZoomed = null;
  isFlipped = false;
}

function handleStateClick(element) {
  if (currentZoomed === element) {
    // If already zoomed, flip the image
    flipImage(element);
  } else if (currentZoomed === null) {
    // If nothing zoomed, zoom this one
    zoomToCenter(element);
  }
}

// Initialize the gallery
function init() {
  const container = document.getElementById("container");
  const overlay = document.querySelector(".overlay");

  // Create state elements
  states.forEach((state) => {
    const stateEl = createStateElement(state);
    container.appendChild(stateEl);

    stateEl.addEventListener("click", (e) => {
      e.stopPropagation();
      handleStateClick(stateEl);
    });
  });

  // Click overlay or container to reset
  overlay.addEventListener("click", resetZoom);
  container.addEventListener("click", (e) => {
    if (e.target === container) {
      resetZoom();
    }
  });

  // Handle escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && currentZoomed) {
      resetZoom();
    }
  });
}

// Handle window resize
window.addEventListener("resize", () => {
  if (currentZoomed) {
    resetZoom();
  }
});

// Start the app
init();
