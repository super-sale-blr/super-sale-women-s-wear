/* =========================
   LOADER
========================= */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";

        setTimeout(() => {
            loader.style.display = "none";
        }, 600);

    }, 1200);

});


/* =========================
   MOBILE MENU
========================= */

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuBtn.innerHTML = '<i class="fas fa-times"></i>';
    } else {
        menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    }

});


/* =========================
   CLOSE MENU AFTER CLICK
========================= */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuBtn.innerHTML =
            '<i class="fas fa-bars"></i>';

    });

});


/* =========================
   SCROLL REVEAL ANIMATION
========================= */

const reveals = document.querySelectorAll(
    ".section, .gallery-card, .contact-card"
);

function revealOnScroll() {

    const windowHeight = window.innerHeight;

    reveals.forEach(item => {

        const top =
            item.getBoundingClientRect().top;

        if (top < windowHeight - 100) {

            item.classList.add("reveal");
            item.classList.add("active");

        }

    });

}

window.addEventListener(
    "scroll",
    revealOnScroll
);

revealOnScroll();


/* =========================
   BACK TO TOP BUTTON
========================= */

const topBtn =
    document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});


/* =========================
   NAVBAR SCROLL EFFECT
========================= */

const navbar =
    document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.padding =
            "10px 7%";

        navbar.style.boxShadow =
            "0 10px 30px rgba(0,0,0,0.15)";

        navbar.style.background =
            "rgba(255,255,255,0.98)";

    } else {

        navbar.style.padding =
            "15px 7%";

        navbar.style.boxShadow =
            "0 5px 20px rgba(0,0,0,0.08)";

        navbar.style.background =
            "rgba(255,255,255,0.95)";

    }

});


/* =========================
   HERO FADE EFFECT
========================= */

const hero =
    document.querySelector(".hero");

window.addEventListener("scroll", () => {

    let scroll =
        window.scrollY;

    hero.style.backgroundPositionY =
        scroll * 0.4 + "px";

});


/* =========================
   BUTTON RIPPLE EFFECT
========================= */

const buttons =
    document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener(
        "mouseenter",
        () => {

            button.style.transform =
                "translateY(-4px) scale(1.03)";

        }
    );

    button.addEventListener(
        "mouseleave",
        () => {

            button.style.transform =
                "translateY(0) scale(1)";

        }
    );

});


/* =========================
   GALLERY PLACEHOLDER HOVER
========================= */

const galleryCards =
    document.querySelectorAll(
        ".gallery-card"
    );

galleryCards.forEach(card => {

    card.addEventListener(
        "mouseenter",
        () => {

            card.style.boxShadow =
                "0 20px 40px rgba(0,0,0,0.15)";

        }
    );

    card.addEventListener(
        "mouseleave",
        () => {

            card.style.boxShadow =
                "0 10px 30px rgba(0,0,0,0.10)";

        }
    );

});


/* =========================
   CONTACT CARD EFFECT
========================= */

const contactCards =
    document.querySelectorAll(
        ".contact-card"
    );

contactCards.forEach(card => {

    card.addEventListener(
        "mouseenter",
        () => {

            card.style.transform =
                "translateY(-8px)";

        }
    );

    card.addEventListener(
        "mouseleave",
        () => {

            card.style.transform =
                "translateY(0)";

        }
    );

});


/* =========================
   ACTIVE NAV LINK
========================= */

const sections =
    document.querySelectorAll("section");

const navItems =
    document.querySelectorAll(
        ".nav-links a"
    );

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 120;

        const sectionHeight =
            section.clientHeight;

        if (
            pageYOffset >= sectionTop
            &&
            pageYOffset <
            sectionTop +
            sectionHeight
        ) {

            current =
                section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove(
            "active-link"
        );

        if (
            link.getAttribute("href")
            === "#" + current
        ) {

            link.classList.add(
                "active-link"
            );

        }

    });

});


/* =========================
   CONSOLE MESSAGE
========================= */

console.log(
`
==================================
SUPER SALE WOMENSWEAR
Premium Fashion Boutique Website
Designed with HTML CSS JS
==================================
`
);