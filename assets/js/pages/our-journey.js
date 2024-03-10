let entryClassCarImage = document.getElementById('entry-class-car-image');
let devClassCarImage = document.getElementById('dev-class-car-image');

let imageCarouselDevClass2024_LondonSouthRegionals = document.getElementById('image-carousel-dev-class-2024_london-south-regionals');

var carSlide = 0;

const imageCarouselDevClass2024_LondonSouthRegionalsImages = 6;

let cache = document.getElementById('cache');

function moveCarousel_DevClass2024_LondonSouthRegionals() {
    let carouselFirstItem = imageCarouselDevClass2024_LondonSouthRegionals.firstElementChild;
    let firstItemWidth = carouselFirstItem.firstElementChild.width;

    /* add first item to the end */

    let copiedFirstItem = carouselFirstItem.cloneNode(true);
    imageCarouselDevClass2024_LondonSouthRegionals.appendChild(copiedFirstItem);

    /* move all items to the left */

    for (let i = 0; i < imageCarouselDevClass2024_LondonSouthRegionals.childElementCount; i++) {
        let item = imageCarouselDevClass2024_LondonSouthRegionals.children[i];

        item.style.transform = `translateX(-${firstItemWidth}px)`;
        item.style.transition = `transform 5s ease-in-out`;
    }

    setTimeout(function () {
        for (let i = 0; i < imageCarouselDevClass2024_LondonSouthRegionals.childElementCount; i++) {
            let item = imageCarouselDevClass2024_LondonSouthRegionals.children[i];

            item.style.transform = `translateX(0)`;
            item.style.transition = `none`;
        }

        imageCarouselDevClass2024_LondonSouthRegionals.removeChild(carouselFirstItem);

        moveCarousel_DevClass2024_LondonSouthRegionals();
    }, 5000);
}

function setupCarousel_DevClass2024_LondonSouthRegionals() {
    for (let i = 2; i <= imageCarouselDevClass2024_LondonSouthRegionalsImages; i++) { /* we start from 2 and have 1 manually inputted because sometimes the browser glitches and returns 0 widths for newly appended elements. could never find a work around :`( */
        let div = document.createElement('div');

        div.classList.add('carousel-item');
        
        let img = document.createElement('img');
        img.src = `../assets/img/our-journey/dev-class-2024_london-south-regionals/${i}-small.png`;
        img.alt = `Dev Class 2024 London South Regionals ${i}`;
        
        div.appendChild(img);
        imageCarouselDevClass2024_LondonSouthRegionals.appendChild(div);
    }

    for (let i = 0; i < imageCarouselDevClass2024_LondonSouthRegionals.childElementCount; i++) {
        let item = imageCarouselDevClass2024_LondonSouthRegionals.children[i];

        item.onclick = function () {
            window.open(`../assets/img/our-journey/dev-class-2024_london-south-regionals/${i + 1}.jpg`, '_blank');
        }
    }
    
    moveCarousel_DevClass2024_LondonSouthRegionals();
}

function changeCar() {
    if (carSlide++ == 4) {
        carSlide = 1;
    }

    entryClassCarImage.style["background-image"] = `url(../assets/img/entry-class-car/${carSlide}.webp)`;
    devClassCarImage.style["background-image"] = `url(../assets/img/dev-class-car/${carSlide}.webp)`;

    setTimeout(changeCar, 5000);
}

function preloadImage(url) {
    let img = new Image();

    img.src = url;

    cache.appendChild(img);
}

function preloadImages() {
    for (let i = 1; i <= 4; i++) {
        preloadImage(`../../img/entry-class-car/${i}.webp`);
        preloadImage(`../../img/dev-class-car/${i}.webp`);
    }
}

window.addEventListener("load", function () {
    setupCarousel_DevClass2024_LondonSouthRegionals();

    preloadImages();
    changeCar();
});