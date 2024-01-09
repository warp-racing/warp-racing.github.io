let entryClassCarImage = document.getElementById('entry-class-car-image');
let devClassCarImage = document.getElementById('dev-class-car-image');

var carSlide = 0;

function changeCar() {
    if (carSlide++ == 4) {
        carSlide = 1;
    }

    entryClassCarImage.style["background-image"] = `url(../assets/img/entry-class-car/${carSlide}.webp)`;
    devClassCarImage.style["background-image"] = `url(../assets/img/dev-class-car/${carSlide}.webp)`;

    setTimeout(changeCar, 5000);
}

window.addEventListener("load", function () {
    changeCar();
});