
const menu = document.querySelector(".header__hamburger");
const menuItems = document.querySelectorAll(".header__menu-item");
const hamburger= document.querySelector(".header__hamburger-icon");
const closeIcon= document.querySelector(".header__close-icon");
const menuIcon = document.querySelector(".header__menu-icon");


function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach( 
  function(menuItem) { 
    menuItem.addEventListener("click", toggleMenu);
  }
)