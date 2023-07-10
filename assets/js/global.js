let cookieConsentBanner = document.getElementById('cookie-consent-banner');

let acceptAllCookies = document.getElementById('accept-all-cookies');
let onlyFunctionalCookies = document.getElementById('only-functional-cookies');

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


acceptAllCookies.addEventListener('click', function () {
    setCookie('cookieConsent', true, 365);
    location.reload();
});

onlyFunctionalCookies.addEventListener('click', function () {
    setCookie('cookieConsent', false, 365);
    location.reload();
});

window.onload = function () {
    if (getCookie('cookieConsent') === 'true') {
        cookieConsentBanner.style.display = 'none';
    } else {
        cookieConsentBanner.style.display = 'block';
    }
}