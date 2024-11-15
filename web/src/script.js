document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".fade-in-section");

  // Check visibility for fade-in effect
  function checkVisibility() {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (scrollY + windowHeight > sectionTop && scrollY < sectionTop + sectionHeight) {
        section.classList.add("is-visible");
      }
    });
  }

  checkVisibility();
  window.addEventListener("scroll", checkVisibility);

  // Smooth scrolling for navigation links
  const scrollLinks = document.querySelectorAll(".nav-links a, .dropdown-content a");
  scrollLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      if (!this.getAttribute("href").includes("http")) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - document.querySelector(".header").offsetHeight,
            behavior: "smooth"
          });
        }
      }
    });
  });

  // Click event for skill boxes (open in new tab)
  const skillBoxes = document.querySelectorAll('.skill-box');
  skillBoxes.forEach(box => {
    box.addEventListener('click', function () {
      const url = this.getAttribute('data-url');
      if (url) {
        window.open(url, '_blank'); // Opens in a new tab or window
      }
    });
  });

  // Click event for project boxes (open in new tab)
  const projectBoxes = document.querySelectorAll('.project-box');
  projectBoxes.forEach(box => {
    box.addEventListener('click', function () {
      const url = this.getAttribute('data-url');
      if (url) {
        window.open(url, '_blank'); // Opens in a new tab or window
      }
    });
  });

  // Typing effect for introduction text
  let text = "I am a passionate developer with a love for creating innovative web applications.";
  let i = 0;

  function typeText() {
    if (i < text.length) {
      document.getElementById("typing-text").innerHTML += text.charAt(i);
      i++;
      setTimeout(typeText, 65);
    }
  }

  typeText();
});

