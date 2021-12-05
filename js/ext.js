let num = document.querySelectorAll(".num h4");
let section = document.querySelector("#numbers");
let checked =false;
window.onscroll = () => {
    if (window.scrollY > section.offsetTop) {
      if (!checked)
        num.forEach(el => {
          let goal = 0;
          let target = el.dataset.target;
          const count = setInterval(() => {
            +target >= 1000 ? (goal += 2.5) : goal++;
            el.textContent = Math.trunc(goal);
            if (goal >= +target) 
            clearInterval(count);
          }, 5500/ target);
          checked = true;
        });
    }
  };
// NavBar
let navbar = document.querySelector(".navbar");
let navbarBrand = document.querySelector(".navbar-brand h2");
let navLink = document.querySelectorAll(".nav-link");
let scroll = addEventListener("scroll", () => {
    if (scrollY > 533) {
        navbar.classList.add("sticky", "background");
        navbarBrand.classList.add("black");
        navLink.forEach(el => el.classList.add("black"))
    }
    else {
        navbar.classList.remove("sticky", "background");
        navbarBrand.classList.remove("black");
        navLink.forEach(el => el.classList.remove("black"))
    }
})
// Scroll
let arrow = document.querySelector(".arrow");
 scroll = addEventListener("scroll", () => {
    if (scrollY > 2000) {
        arrow.classList.remove("hidden");
    }
    else {
        arrow.classList.add("hidden");
    }
})
