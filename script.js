// JavaScript to toggle nav-list on mobile

function toggleMenu() {
    const navList = document.getElementById("nav-list");
    const headerBtn = document.getElementById("header-btn");
    if (navList.style.display === "none" || navList.style.display === "") {
        navList.style.display = "block";
        headerBtn.style.display = "none";
    } else {
        navList.style.display = "none";
        headerBtn.style.display = "block";
    }
}


// JavaScript to toggle card rotation on a click / touchend type event
const cardElements = document.querySelectorAll(".card");

cardElements.forEach(card => {
  card.addEventListener("click", function() {
    card.classList.toggle("is-flipped");
  });
});

