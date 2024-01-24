let nav = document.getElementsByTagName("nav")[0];

function setupNavbar() {
    if (nav === null) {
        throw new Error("Navbar not found");
    }
}

window.addEventListener("load", function () {
    setupNavbar();
})