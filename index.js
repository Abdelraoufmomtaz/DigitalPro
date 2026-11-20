let menuBtn = document.getElementById("menuBtn");
let dropdownMenu = document.getElementById("dropdownMenu");

menuBtn.addEventListener("click", function () {
    dropdownMenu.classList.toggle("hidden");
});