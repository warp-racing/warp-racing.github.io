let entryClassCarImage = document.getElementById('entry-class-car-image');

var entryClassSlide = 0;

function entryClassCarSlider() {
    if (entryClassSlide++ == 3) {
        entryClassSlide = 1;
    }

    entryClassCarImage.style["background-image"] = `url(../assets/img/entry-class-car/${entryClassSlide}.png)`;

    setTimeout(entryClassCarSlider, 5000);
}

window.addEventListener("load", function () {
    entryClassCarSlider();
});