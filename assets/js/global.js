let copyright = document.getElementById("copyright");
let header = document.getElementsByTagName("header")[0];

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

    window.scrollTo(0, getWidth() < 1100 ? elementY : elementY - header.offsetHeight);
}

function cardFixerForMobile() {
    if (getWidth() < 1000) {
        let cards = document.getElementsByClassName("card-a");

        for (let i = 0; i < cards.length; i++) {
            let card = cards[i];
            let oldHref = card.href;

            card.href = "";
            card.onclick = function (event) {
                event.preventDefault();

                card.dispatchEvent(mouseoverEvent);
            }

            let readMore = card.getElementsByClassName("read-more")[0];

            readMore.onclick = function (event) {
                event.preventDefault();

                window.location.href = oldHref;
            }
        }
    }
}

window.addEventListener("load", function () {
    copyright.innerHTML = copyright.innerHTML.replace("{current_year}", new Date().getFullYear());

    scrollToElement();
    cardFixerForMobile();
});