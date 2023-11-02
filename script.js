// JavaScript to toggle nav-list on mobile

function toggleMenu() {
    const header = document.getElementById("header");
    const navList = document.getElementById("nav-list");
    const navListClass = document.querySelector(".nav-list");
    const headerBtn = document.getElementById("header-btn");
    if (navList.style.display === "none" || navList.style.display === "") {
        navList.style.display = "block";
        headerBtn.style.display = "none";
        header.style.backgroundColor = "#16AA2D";
        header.style.height = "100vh";
    } else {
        navList.style.display = "none";
        headerBtn.style.display = "block";
        header.style.backgroundColor = "white";
        header.style.height = "";

    }
}


// JavaScript to toggle card rotation on a click / touchend type event
const cardElements = document.querySelectorAll(".card");

cardElements.forEach(card => {
  card.addEventListener("click", function() {
    card.classList.toggle("is-flipped");
  });
});

