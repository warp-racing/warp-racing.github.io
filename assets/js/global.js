var amountOfSlides = 4;
var slide = 0;
var timeout;
var navbarHeight = document.getElementById("navbar").offsetHeight;
var entryClassSlide = 0;

const setCookie = (name, value, days = 7) => {
    const expires = new Date(Date.now() + days * 864e5).toUTCString()
    document.cookie = name + "=" + encodeURIComponent(value) + "; expires=" + expires + "; path=/; SameSite=Strict"
}

const getCookie = (name) => {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

const deleteCookie = (name,) => {
    setCookie(name, "", -1)
}

function updateNavbar(activeElement) {
    const navbarItems = ["welcome", "about-us", "meet-the-team", "our-cars", "portfolios"].map(i => 'nav_' + i);
    activeElement = `nav_${activeElement}`;

    for (let i = 0; i < navbarItems.length; i++) {
        if (navbarItems[i] == activeElement) {
            document.getElementById(navbarItems[i]).className = "active";
        } else {
            document.getElementById(navbarItems[i]).className = "";
        }
    }
}

function updateTheme() {
    var darkTheme;

    if (["light", "dark"].includes(getCookie("theme"))) {
        darkTheme = (getCookie("theme") == "dark");
    } else {
        darkTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        setCookie("theme", darkTheme ? "dark" : "light", 365);
    }

    var css = document.createElement("link");
    css.rel = "stylesheet";

    var themeToggle = document.getElementById("theme-toggle");

    if (darkTheme) {
        css.href = "assets/css/dark/master.css";
        themeToggle.className = "fa fa-sun-o";
    } else {
        css.href = "assets/css/light/master.css";
        themeToggle.className = "fa fa-moon-o";
    }

    document.head.appendChild(css);
}

function toggleTeam() {
    setCookie("theme", getCookie("theme") == "dark" ? "light" : "dark", 365);
    updateTheme();
}

document.getElementById("theme-toggle").onclick = function () {
    setCookie("theme", (getCookie("theme") == "dark") ? "light" : "dark", 365);
    updateTheme();
}

function updateSlide() {
    if (slide++ == amountOfSlides) {
        slide = 1;
    }

    document.getElementById("welcome").style["background-image"] = `url(assets/img/slider/${slide}.webp)`;

    for (let i = 1; i <= amountOfSlides; i++) {
        var dot = document.getElementById(`dot-${i}`);

        if (i == slide) {
            dot.className = "dot selected-dot";
        } else {
            dot.className = "dot";
        }
    }

    timeout = setTimeout(updateSlide, 5000);
}

function scrollToElement(element) {
    window.scrollTo(window.scrollX, document.getElementById(element).getBoundingClientRect().top + window.scrollY - (Math.max(document.body.scrollWidth, document.documentElement.scrollWidth, document.body.offsetWidth, document.documentElement.offsetWidth, document.documentElement.clientWidth) < 750 ? 0 : navbarHeight));
}

function updateSlideTo(newSlide) {
    slide = newSlide - 1;
    clearTimeout(timeout);
    updateSlide();
}

function entryClassSlider() {
    if (entryClassSlide++ == 3) {
        entryClassSlide = 1;
    }

    document.getElementById("entry-class-car-image").style["background-image"] = `url(assets/img/cars/entry-class-car/${entryClassSlide}.png)`;

    setTimeout(entryClassSlider, 5000);
}

updateSlide();

window.onscroll = function () {
    const navbar = document.getElementById("navbar");

    if (Math.max(
        document.body.scrollWidth,
        document.documentElement.scrollWidth,
        document.body.offsetWidth,
        document.documentElement.offsetWidth,
        document.documentElement.clientWidth
    ) > 900) {
        navbar.style.position = "fixed";
        navbar.style["z-index"] = 1;
    } else {
        navbar.style.position = "static";
        navbar.style["z-index"] = "auto";
    }

    const portfolios = document.getElementById("portfolios").offsetTop - navbarHeight;
    const our_cars = document.getElementById("our-cars").offsetTop - navbarHeight;
    const meet_the_team = document.getElementById("meet-the-team").offsetTop - navbarHeight;
    const about_us = document.getElementById("about-us").offsetTop - navbarHeight;

    if (window.scrollY >= portfolios) {
        updateNavbar("portfolios");
    } else if (window.scrollY >= our_cars) {
        updateNavbar("our-cars");
    } else if (window.scrollY >= meet_the_team) {
        updateNavbar("meet-the-team");
    } else if (window.scrollY >= about_us) {
        updateNavbar("about-us");
    } else {
        updateNavbar("welcome");
    }
}

window.onresize = window.onscroll;

window.onload = function () {
    updateTheme();

    let copyright = document.getElementById("copyright");
    copyright.innerHTML = copyright.innerHTML.replace("{current_year}", new Date().getFullYear());

    const cookieConsent = getCookie("cookieConsent");

    if (cookieConsent != "true" && cookieConsent != "false") {
        document.getElementById("cookie-consent-banner").style.display = "block";
    } else if (cookieConsent == "true") {
        document.body.innerHTML += `<script async src="//static.getclicky.com/101399311.js"></script><noscript><p><img alt="Clicky" width="1" height="1" src="//in.getclicky.com/101399311ns.gif" /></p></noscript>`;
    }

    window.onscroll();

    entryClassSlider();
}

document.getElementById("cookie-consent-banner__cta")
    .onclick = function () {
        setCookie("cookieConsent", "true", 365);
        document.getElementById("cookie-consent-banner").style.display = "none";

        window.location.reload(); // Reload the page.
    };

document.getElementById("cookie-consent-banner__cta--secondary")
    .onclick = function () {
        setCookie("cookieConsent", "false", 365);
        document.getElementById("cookie-consent-banner").style.display = "none";
    };
