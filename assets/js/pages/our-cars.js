let entryClassCarImage = document.getElementById('entry-class-car-image');

var entryClassSlide = 0;

function entryClassCarSlider() {
    if (entryClassSlide++ == 4) {
        entryClassSlide = 1;
    }

    entryClassCarImage.style["background-image"] = `url(../assets/img/entry-class-car/${entryClassSlide}.webp)`;

    setTimeout(entryClassCarSlider, 5000);
}

window.addEventListener("load", function () {
    entryClassCarSlider();
});