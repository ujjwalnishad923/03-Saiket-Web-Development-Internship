// ================= MOBILE MENU =================

const menuBtn = document.getElementById("menuBtn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", function () {

    nav.classList.toggle("show");

});


// ================= CLOSE MENU AFTER CLICK =================

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        nav.classList.remove("show");

    });

});


// ================= ACTIVE NAVBAR LINK =================

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.forEach(function (item) {
            item.classList.remove("active");
        });

        this.classList.add("active");

    });

});


// ================= CURRENT YEAR =================

const year = document.getElementById("year");

year.textContent = new Date().getFullYear();


// ================= GO TO TOP =================

const topBtn = document.getElementById("topBtn");

topBtn.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});