let cookieConsentBanner = document.getElementById('cookie-consent-banner');

let acceptAllCookies = document.getElementById('accept-all-cookies');
let onlyFunctionalCookies = document.getElementById('only-functional-cookies');

let navbar = document.getElementById("navbar");

function setCookie(cname, cvalue, exdays) {
    const d = new Date();

    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));

    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');

    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];

        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }

        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function getWidth() {
    return Math.max(
        document.body.scrollWidth,
        document.documentElement.scrollWidth,
        document.body.offsetWidth,
        document.documentElement.offsetWidth,
        document.documentElement.clientWidth
    );
}

function scrollToElement() {
    const params = new URLSearchParams(window.location.search);

    const elementID = params.get("id");
    const elementY = window.scrollY + document.getElementById(elementID).getBoundingClientRect().top;

    window.scrollTo(0, getWidth() < 1000 ? elementY : elementY - navbar.offsetHeight);
}

window.addEventListener("load", function () {
    let cookieConsent = getCookie('cookieConsent');

    if (cookieConsent === 'true') {
        cookieConsentBanner.style.display = 'none';

        const head = document.getElementsByTagName('head')[0];

        let script = document.createElement("script");
        script.src = "https://www.googletagmanager.com/gtag/js?id=G-T4H3H4C6PF"

        head.appendChild(script);

        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments) };

        gtag('js', new Date());
        gtag('config', 'G-T4H3H4C6PF');

        (function (c, l, a, r, i, t, y) {
            c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments) };
            t = l.createElement(r); t.async = 1; t.src = "https://www.clarity.ms/tag/" + i;
            y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);
        })(window, document, "clarity", "script", "hdjddzo6n4");
    } else if (cookieConsent == "") {
        cookieConsentBanner.style.display = 'block';
    }

    scrollToElement();
});

acceptAllCookies.addEventListener('click', function () {
    setCookie('cookieConsent', true, 365);
    location.reload();
});

onlyFunctionalCookies.addEventListener('click', function () {
    setCookie('cookieConsent', false, 365);
    location.reload();
});