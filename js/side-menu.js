// Side Menu

// Get ref to burger menu button
const menuBtn = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");
const burgerBar = document.querySelector(".bar");
const menulink = document.querySelectorAll(".mobile-menu div a");
const body = document.querySelector("body");

// On click, toggles class "side-menu-open" to show/hide
menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("menu-active");
  // Locks scrolling on menu open
  body.classList.toggle("lock-scroll");
  // Toggles the class "rotate" to add/remove a cross
  setTimeout(() => {
    burgerBar.classList.toggle("rotate");
  }, 100)
});

// Hides menu when each link is clicked
for (let i = 0; i < menulink.length; i++) {
  menulink[i].addEventListener("click", () => {
    mobileMenu.classList.toggle("menu-active");
    // Toggles the class "rotate" to add/remove a cross
    setTimeout(() => {
      burgerBar.classList.remove("rotate");
    }, 150)
  })
};