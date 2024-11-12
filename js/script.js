//toggle class active
const navbarNav = document.querySelector(".navbar-nav");
//ketika hamburger menu di klik
document.querySelector("#hamburger").onclick = () => {
  navbarNav.classList.toggle("active");
};

//klik di luar sibedar untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});