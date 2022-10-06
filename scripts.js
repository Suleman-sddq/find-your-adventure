function navSlide() {
  const burger = document.querySelector(".burger");
  const navLinks = document.querySelector(".nav-links");
  burger.addEventListener("click", function () {
    if (navLinks.classList.contains("nav-active")) {
      navLinks.classList.remove("nav-active");
      document.querySelector(".hero").style.filter = "none";
      // document.querySelector(".logo").style.filter = "none";
    } else {
      navLinks.classList.add("nav-active");
      document.querySelector(".hero").style.filter = "blur(5px)";
      // document.querySelector(".logo").style.filter = "blur(5px)";
    }
  });
  navLinks.addEventListener("click", () => {
    if (navLinks.classList.contains("nav-active")) {
      navLinks.classList.remove("nav-active");
      document.querySelector(".hero").style.filter = "none";
      // document.querySelector(".logo").style.filter = "none";
    } else {
      navLinks.classList.add("nav-active");
      document.querySelector(".hero").style.filter = "blur(5px)";
      // document.querySelector(".logo").style.filter = "blur(5px)";
    }
  })
}
navSlide();
