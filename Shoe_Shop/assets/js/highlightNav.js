/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll(".section");

const scrollActive = () => {
  const scrollDown = window.scrollY;
  const navbarHeight = window.innerHeight * 0.1;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - navbarHeight - 32,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        "nav ul li a[href*=" + sectionId + "]"
      );

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);
