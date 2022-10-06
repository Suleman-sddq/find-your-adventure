function navSlide() {
  const burger = document.querySelector(".burger");
  const navLinks = document.querySelector(".nav-links");
  burger.addEventListener("click", function () {
    if (navLinks.classList.contains("nav-active")) {
      navLinks.classList.remove("nav-active");
    } else {
      navLinks.classList.add("nav-active");

    }
  });
  navLinks.addEventListener("click", () => {
    if (navLinks.classList.contains("nav-active")) {
      navLinks.classList.remove("nav-active");

    } else {
      navLinks.classList.add("nav-active");

    }
  })
}
navSlide();
