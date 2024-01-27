const NAV_LINKS = [
    { "name": "Home", "url": "/" },
    { "name": "Blog", "url": "/blog/" },
    { "name": "Sponsors", "url": "/sponsors/" },
    { "name": "Our Game", "url": "our-game/" },
]
const PAGE_URL = window.location.href;
const URL_PARSED = new URL(PAGE_URL);

let html = document.getElementsByTagName("html")[0];
let nav = document.getElementsByTagName("nav")[0];
let nav_links = nav.getElementsByTagName("ul")[0];

function updateTheme() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        html.dataset.theme = "dark";
    } else {
        html.dataset.theme = "light";
    }
}

function setupNavbar() {
    if (nav === null) {
        throw new Error("Navbar not found");
    }

    for (let i = 0; i < NAV_LINKS.length; i++) {
        let link = NAV_LINKS[i];

        let li = document.createElement("li");
        let a = document.createElement("a");

        a.href = link.url;
        a.innerText = link.name;
        
        if (link.url == URL_PARSED.pathname) {
            a.id = "current";
        }

        li.appendChild(a);
        nav_links.appendChild(li);
    }
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    updateTheme();
});

window.addEventListener("load", function () {
    if (URL_PARSED.pathname.endsWith("/index.html")) {
        window.location.replace(URL_PARSED.origin);
    }

    updateTheme();

    setupNavbar();
})