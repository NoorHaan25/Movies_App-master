let header = document.getElementById("header");
let brand = document.querySelector(".navbar-brand");
let navLinks = document.querySelectorAll(".nav-link");
let iconBar = document.getElementById("icon-bar");
window.addEventListener('scroll', () => {
    header.classList.toggle("shadow" , window.scrollY > 0);
    header.style.backgroundColor = window.scrollY > 0 ? "#ffffff" : null;
    brand.style.color = window.scrollY > 0 ? "#000000" : null;
    iconBar.style.color = window.scrollY > 0 ? "#000000" : "#ffffff" ;
    navLinks.forEach(link => {
        link.style.color = window.scrollY > 0 ? "#000000" : null;
    });
});

