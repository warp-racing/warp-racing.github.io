var amountOfSlides = 2;
var slide = 0;
var timeout;
var navbarHeight = document.getElementsByClassName("navbar")[0].offsetHeight;

const setCookie = (name, value, days = 7) => {
    const expires = new Date(Date.now() + days * 864e5).toUTCString()
    document.cookie = name + "=" + encodeURIComponent(value) + "; expires=" + expires + "; path=/"
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
    var navbarItems = ["welcome", "about-us", "meet-the-team", "our-cars"];

    for (var i = 0; i < navbarItems.length; i++) {
        if (navbarItems[i] == activeElement) {
            document.getElementById(navbarItems[i]).className = "active";
        } else {
            document.getElementById(navbarItems[i]).className = "";
        }
    }
}

function updateTheme() {
    if (getCookie("theme") in ["light", "dark"]) {
        var darkTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        setCookie("theme", darkTheme ? "dark" : "light", 365);
    } else {
        var darkTheme = getCookie("theme") == "dark";
    }

    var css = document.head.appendChild(document.createElement("link"));
    var themeToggle = document.getElementById("theme-toggle");

    if (darkTheme) {
        css.href = "assets/css/dark/master.css";

        themeToggle.className = "fa fa-sun-o";
        themeToggle.onclick = function () { setCookie("theme", "light", 365); updateTheme(); };
    } else {
        css.href = "assets/css/light/master.css";

        themeToggle.className = "fa fa-moon-o";
        themeToggle.onclick = function () { setCookie("theme", "dark", 365); updateTheme(); };
    }

    css.rel = "stylesheet";
}

function updateSlide() {
    if (slide++ == amountOfSlides) {
        slide = 1;
    }

    document.getElementsByClassName("welcome")[0].style["background-image"] = `url(assets/img/slider/${slide}.webp)`;

    for (i = 1; i <= amountOfSlides; i++) {
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
    console.log(document.getElementsByClassName(element)[0].scrollY);
    window.scrollTo(window.scrollX, document.getElementsByClassName(element)[0].getBoundingClientRect().top + window.scrollY - (Math.max(document.body.scrollWidth, document.documentElement.scrollWidth, document.body.offsetWidth, document.documentElement.offsetWidth, document.documentElement.clientWidth) < 750 ? 0 : navbarHeight));
}

function updateSlideTo(slide) {
    window.slide = slide - 1;
    clearTimeout(timeout);
    updateSlide();
}

updateSlide();

window.onscroll = function () {
    var navbar = document.getElementsByClassName("navbar")[0];

    if (Math.max(
        document.body.scrollWidth,
        document.documentElement.scrollWidth,
        document.body.offsetWidth,
        document.documentElement.offsetWidth,
        document.documentElement.clientWidth
    ) < 750) {
        navbar.style.position = "static";
        navbar.style["z-index"] = "auto";
    } else if (window.pageYOffset >= navbar.offsetTop) {
        navbar.style.position = "fixed";
        navbar.style["z-index"] = 1;
    } else {
        navbar.style.position = "static";
        navbar.style["z-index"] = "auto";
    }

    var meet_the_team = document.getElementsByClassName("meet-the-team")[0].offsetTop - navbarHeight;
    var about_us = document.getElementsByClassName("about-us")[0].offsetTop - navbarHeight;

    if (window.scrollY >= meet_the_team) {
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

    document.getElementById("copyright").innerHTML = `©WΔRP 2022 - ${new Date().getFullYear()}. All rights reserved.`;

    var cookieConsent = getCookie("cookieConsent");

    if (cookieConsent != "true" && cookieConsent != "false") {
        document.getElementsByClassName("cookie-consent-banner")[0].style.display = "block";
    }

    window.onscroll();
}

document.getElementsByClassName("cookie-consent-banner__cta")[0]
    .onclick = function () {
        setCookie("cookieConsent", "true", 365);
        document.getElementsByClassName("cookie-consent-banner")[0].style.display = "none";

        window.location.reload(); // Reload the page.
    };

document.getElementsByClassName("cookie-consent-banner__cta cookie-consent-banner__cta--secondary")[0]
    .onclick = function () {
        setCookie("cookieConsent", "false", 365);
        document.getElementsByClassName("cookie-consent-banner")[0].style.display = "none";
    };