const slideNavigator = (name) => {
  let slides = document.querySelectorAll(".bg-slide");
  slides.forEach((slide) => {
    slide.classList.remove("active");
    if (slide.classList.contains(name)) {
      slide.classList.add("active");
    }
  });
};

const addEventListeners = (element, events, handler) => {
  events.forEach((event) => element.addEventListener(event, handler));
};

document.addEventListener("DOMContentLoaded", () => {
  // Slide button navigation
  const slideBtnList = document.querySelectorAll(".slide-btn");
  slideBtnList.forEach((btn) => {
    addEventListeners(btn, ["click", "touchstart"], function (e) {
      e.preventDefault();
      slideBtnList.forEach((el) => {
        el.classList.remove("active");
      });
      this.classList.add("active");
      slideNavigator(this.getAttribute("data-target"));
    });
  });

  // Section navigation
  const navList = document.querySelectorAll(".nav-btn");
  navList.forEach((nav) => {
    addEventListeners(nav, ["click", "touchstart"], function (e) {
      e.preventDefault();
      navList.forEach((el) => {
        el.classList.remove("active");
      });
      this.classList.add("active");
      sectionNavigator(this.getAttribute("data-target"));
      if (screen.width < 768) {
        toggleMenu();
      }
    });
  });
});

// Toggle the menu
const toggleMenu = () => {
  const menu = document.querySelector(".menu");
  const navMobile = document.querySelector(".nav-mobile");
  menu.classList.toggle("active");
  navMobile.classList.toggle("active");
};

// Section navigation logic
const sectionNavigator = (name) => {
  let sections = document.querySelectorAll("section");
  let header = document.querySelector("header");
  sections.forEach((section) => {
    section.classList.remove("section-show");
    if (section.classList.contains(name)) {
      section.classList.add("section-show");
      header.classList.add("active");
    }
  });
};

// Reset the header
const resetHeader = () => {
  let header = document.querySelector("header");
  header.classList.remove("active");
};

// Initialize navigation to the "about" section
const initNavigation = () => {
  const navList = document.querySelectorAll(".nav-btn");
  navList.forEach((el) => {
    el.classList.remove("active");
    if (el.getAttribute("data-target") === "about") {
      el.classList.add("active");
    }
  });
  sectionNavigator("about");
};

// Select all navigation buttons (both desktop and mobile)
const allNavButtons = document.querySelectorAll(".nav a, .nav-mobile a");

// Function to disable scrolling
function disableScroll(event) {
  event.preventDefault(); // Prevent default link behavior
  document.body.style.overflowY = "hidden"; // Disable scrolling
}

// Add click event listeners to all navigation buttons
allNavButtons.forEach((button) => {
  button.addEventListener("click", disableScroll);
});

// Function to reset scrolling
function resetScroll(event) {
  event.preventDefault(); // Prevent default link behavior
  document.body.style.overflowY = "scroll"; // Enable scrolling
}

// Add reset functionality to active "Home" buttons (desktop and mobile)
const activeHomeButtons = document.querySelectorAll(
  ".nav-btn.active, .nav-mobile .nav-btn.active"
);
activeHomeButtons.forEach((btn) => {
  btn.addEventListener("click", resetScroll);
});
