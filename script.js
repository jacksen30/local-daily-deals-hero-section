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


// JavaScript to toggle card rotation on click

const cards = document.querySelectorAll(".card");
const cardFront = document.getElementsByClassName("card--front");
const cardBack = document.getElementsByClassName(".card--back");

// cards.forEach(card => {
//   const toggleButtons = card.querySelectorAll(".toggle-button");

//   toggleButtons.forEach(button => {
//     button.addEventListener("click", function() {
//       card.classList.toggle("is-flipped");
//     });
//   });
// });

cards.forEach(card => {
  const toggleButtons = card.querySelectorAll(".card--front");

  toggleButtons.forEach(button => {
    card.addEventListener("click", function() {
      card.classList.toggle("is-flipped");
    });
  });
});


// cardBack.addEventListener("click", function() {
//   card.classList.toggle("is-flipped");
// });

// cardFront.addEventListener("click", function() {
//   card.classList.toggle("is-flipped");
// });
