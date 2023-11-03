const menuToggle = document.getElementById("menu-toggle");

// JavaScript to toggle nav-list on mobile
function toggleMenu() {
  const header = document.getElementById("header");
  const navList = document.getElementById("nav-list");
  const headerBtn = document.getElementById("header-btn");

  if (header && navList && headerBtn && menuToggle) {
    navList.classList.toggle('open');
    header.classList.toggle('open');
    headerBtn.classList.toggle('open');
    menuToggle.classList.toggle('cross');
  } else {
    // Handle the error appropriately
    console.error('One or more elements are not found.');
  }
}

menuToggle.addEventListener("click", toggleMenu);


// JavaScript to toggle card rotation on a click / touchend type event
const cardElements = document.querySelectorAll(".card");

cardElements.forEach(card => {
  card.addEventListener("click", function() {
    card.classList.toggle("is-flipped");
  });
});


