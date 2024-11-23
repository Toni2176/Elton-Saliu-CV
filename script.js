const darkModeBtn = document.querySelector(".darkmode-btn");
const darkModeBtnIcon = document.querySelector(".darkmode-icon");

darkModeBtn.addEventListener("click", () => {
  document.body.classList.toggle("darkmode");

  if (darkModeBtnIcon.classList.contains("fa-moon")) {
    darkModeBtnIcon.classList.remove("fa-moon");
    darkModeBtnIcon.classList.add("fa-sun");
  } else {
    darkModeBtnIcon.classList.remove("fa-sun");
    darkModeBtnIcon.classList.add("fa-moon");
  }
});

// VIEWPORT
const triangle = document.querySelector(".triangle");
const headerBtns = document.querySelectorAll(".header-link-css");
const headerHome = document.querySelector(".header-home");
const headerAbout = document.querySelector(".header-about");
const headerSkill = document.querySelector(".header-skill");
const headerEducation = document.querySelector(".header-education");
const headerContact = document.querySelector(".header-contact");

headerHome.addEventListener("click", () => {
  window.scrollTo(0, 0);
});
headerAbout.addEventListener("click", () => {
  window.scrollTo(0, 1100);
});
headerSkill.addEventListener("click", () => {
  window.scrollTo(0, 2250);
});
headerEducation.addEventListener("click", () => {
  window.scrollTo(0, 3450);
});
headerContact.addEventListener("click", () => {
  window.scrollTo(0, 5000);
});

let pageOffset = 0;

document.addEventListener("scroll", () => {
  pageOffset = scrollY;
  console.log(pageOffset);
  if (pageOffset >= 0 && pageOffset <= 600) {
    headerBtns.forEach((btn) => {
      btn.classList.remove("active");
    });
    headerHome.classList.add("active");
    triangle.style.left = "var(--header-home)";
  }
  if (pageOffset > 600 && pageOffset <= 1750) {
    headerBtns.forEach((btn) => {
      btn.classList.remove("active");
    });
    headerAbout.classList.add("active");
    triangle.style.left = "var(--header-about)";
  }
  if (pageOffset > 1750 && pageOffset <= 2950) {
    headerBtns.forEach((btn) => {
      btn.classList.remove("active");
    });
    headerSkill.classList.add("active");
    triangle.style.left = "var(--header-skill)";
  }
  if (pageOffset > 2950 && pageOffset <= 3650) {
    headerBtns.forEach((btn) => {
      btn.classList.remove("active");
    });
    headerEducation.classList.add("active");
    triangle.style.left = "var( --header-education)";
  }

  if (pageOffset > 3650) {
    headerBtns.forEach((btn) => {
      btn.classList.remove("active");
    });
    headerContact.classList.add("active");
    triangle.style.left = "var( --header-contact)";
  }
});
