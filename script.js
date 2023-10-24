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