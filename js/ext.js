let num = document.querySelectorAll(".num h4");
let section = document.querySelector("#numbers");
let check = false;
window.onscroll = () => {
    if (window.scrollY > section.offsetTop) {
        if (!check) {
            num.forEach(el => {
                let target = el.dataset.target;
                let count = setInterval(() => {
                    el.textContent++;
                    if (el.textContent == target)
                        clearInterval(count);
                }
                    , 1000 / target);
                check = true;
            })
        }
    }
}
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





