const header = document.getElementById("header");
const bars = document.getElementById("bar");
const navList = document.getElementById("nav-list");
const headerBtn = document.getElementById("header-btn");

// JavaScript to toggle nav-list on mobile
function toggleMenu() {
  const header = document.getElementById("header");
  const navList = document.getElementById("nav-list");
  const headerBtn = document.getElementById("header-btn");

  navList.classList.toggle('open');
  header.classList.toggle('open');
  headerBtn.classList.toggle('open');
  bar.classList.toggle('open');
}


// JavaScript to toggle card rotation on a click / touchend type event
const cardElements = document.querySelectorAll(".card");

cardElements.forEach(card => {
  card.addEventListener("click", function() {
    card.classList.toggle("is-flipped");
  });
});

