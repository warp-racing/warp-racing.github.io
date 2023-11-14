let copyright = document.getElementById("copyright");

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

    if (elementID === null) {
        return; // No element to scroll to
    }

    const elementY = window.scrollY + document.getElementById(elementID).getBoundingClientRect().top;

    window.scrollTo(0, getWidth() < 1000 ? elementY : elementY - navbar.offsetHeight);
}

window.addEventListener("load", function () {
    copyright.innerHTML = copyright.innerHTML.replace("{current_year}", new Date().getFullYear());

    scrollToElement();
});