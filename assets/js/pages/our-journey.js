let entryClassCarImage = document.getElementById('entry-class-car-image');
let devClassCarImage = document.getElementById('dev-class-car-image');
let devClassCarImageNats = document.getElementById('dev-class-car-image-nats');

let imageCarouselDevClass2024_LondonSouthRegionals = document.getElementById('image-carousel-dev-class-2024_london-south-regionals');
let imageCarouselDevClass2024_UKNationals = document.getElementById('image-carousel-dev-class-2024_uk-nationals');

var carSlide = 0;

const imageCarouselDevClass2024_LondonSouthRegionalsImages = 6;
const imageCarouselDevClass2024_UKNationalsImages = 11;

function moveCarousel_DevClass2024_LondonSouthRegionals() {
    let carouselFirstItem = imageCarouselDevClass2024_LondonSouthRegionals.firstElementChild;
    let firstItemWidth = carouselFirstItem.firstElementChild.width;

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

        /* add first item to the end */

        let copiedFirstItem = carouselFirstItem.cloneNode(true);
        copiedFirstItem.onclick = function () {
            window.open(`../assets/img/our-journey/dev-class-2024_london-south-regionals/${carouselFirstItem.dataset.image}.jpg`, '_blank');
        }
        imageCarouselDevClass2024_LondonSouthRegionals.appendChild(copiedFirstItem);

        imageCarouselDevClass2024_LondonSouthRegionals.removeChild(carouselFirstItem);

        moveCarousel_DevClass2024_LondonSouthRegionals();
    }, 5000);
}

async function moveCarousel_DevClass2024_UKNationals() {
    let carouselFirstItem = imageCarouselDevClass2024_UKNationals.firstElementChild;
    let firstItemWidth = carouselFirstItem.firstElementChild.width;

    /* move all items to the left */

    for (let i = 0; i < imageCarouselDevClass2024_UKNationals.childElementCount; i++) {
        let item = imageCarouselDevClass2024_UKNationals.children[i];

        item.style.transform = `translateX(-${firstItemWidth}px)`;
        item.style.transition = `transform 5s ease-in-out`;
    }

    setTimeout(function () {
        for (let i = 0; i < imageCarouselDevClass2024_UKNationals.childElementCount; i++) {
            let item = imageCarouselDevClass2024_UKNationals.children[i];

            item.style.transform = `translateX(0)`;
            item.style.transition = `none`;
        }

        /* add first item to the end */

        let copiedFirstItem = carouselFirstItem.cloneNode(true);
        copiedFirstItem.onclick = function () {
            window.open(`../assets/img/our-journey/dev-class-2024_uk-nationals/${carouselFirstItem.dataset.image}.jpg`, '_blank');
        }
        imageCarouselDevClass2024_UKNationals.appendChild(copiedFirstItem);

        imageCarouselDevClass2024_UKNationals.removeChild(carouselFirstItem);

        moveCarousel_DevClass2024_UKNationals();
    }, 5000);
}

async function setupCarousel_DevClass2024_LondonSouthRegionals() {
    for (let i = 2; i <= imageCarouselDevClass2024_LondonSouthRegionalsImages; i++) { /* we start from 2 and have 1 manually inputted because sometimes the browser glitches and returns 0 widths for newly appended elements. could never find a work around :`( */
        let div = document.createElement('div');

        div.classList.add('carousel-item');
        
        let img = document.createElement('img');
        img.src = `../assets/img/our-journey/dev-class-2024_london-south-regionals/${i}-small.webp`;
        img.alt = `Dev Class 2024 London South Regionals ${i}`;
        
        div.appendChild(img);
        imageCarouselDevClass2024_LondonSouthRegionals.appendChild(div);
    }

    for (let i = 0; i < imageCarouselDevClass2024_LondonSouthRegionals.childElementCount; i++) {
        let item = imageCarouselDevClass2024_LondonSouthRegionals.children[i];

        item.onclick = function () {
            window.open(`../assets/img/our-journey/dev-class-2024_london-south-regionals/${i + 1}.jpg`, '_blank');
        }
        item.dataset.image = i+1;
    }

    setTimeout(moveCarousel_DevClass2024_LondonSouthRegionals, 5000);
}

async function setupCarousel_DevClass2024_UKNationals() {
    for (let i = 2; i <= imageCarouselDevClass2024_UKNationalsImages; i++) { /* we start from 2 and have 1 manually inputted because sometimes the browser glitches and returns 0 widths for newly appended elements. could never find a work around :`( */
        let div = document.createElement('div');

        div.classList.add('carousel-item');
        
        let img = document.createElement('img');
        img.src = `../assets/img/our-journey/dev-class-2024_uk-nationals/${i}-small.webp`;
        img.alt = `Dev Class 2024 UK Nationals ${i}`;
        
        div.appendChild(img);
        imageCarouselDevClass2024_UKNationals.appendChild(div);
    }

    for (let i = 0; i < imageCarouselDevClass2024_UKNationals.childElementCount; i++) {
        let item = imageCarouselDevClass2024_UKNationals.children[i];

        item.onclick = function () {
            window.open(`../assets/img/our-journey/dev-class-2024_uk-nationals/${i + 1}.jpg`, '_blank');
        }
    }

    setTimeout(moveCarousel_DevClass2024_UKNationals, 5000);
}

function changeCar() {
    if (carSlide++ == 4) {
        carSlide = 1;
    }

    entryClassCarImage.style["background-image"] = `url(../assets/img/entry-class-car/${carSlide}.webp)`;
    devClassCarImage.style["background-image"] = `url(../assets/img/dev-class-car/${carSlide}.webp)`;
    devClassCarImageNats.style["background-image"] = `url(../assets/img/dev-class-car/${carSlide}-nats.webp)`;

    setTimeout(changeCar, 5000);
}

function preloadImage(url) {
    let img = new Image();

    img.src = url;
}

async function preloadImages() {
    for (let i = 1; i <= 4; i++) {
        preloadImage(`../assets/img/entry-class-car/${i}.webp`);
        preloadImage(`../assets/img/dev-class-car/${i}.webp`);
        preloadImage(`../assets/img/dev-class-car/${i}-nats.webp`);

        preloadImage(`../assets/img/our-journey/dev-class-2024_london-south-regionals/${i}-small.webp`);
        preloadImage(`../assets/img/our-journey/dev-class-2024_uk-nationals/${i}-small.webp`);
    }

    for (let i = 5; i <= imageCarouselDevClass2024_LondonSouthRegionalsImages; i++) {
        preloadImage(`../assets/img/our-journey/dev-class-2024_london-south-regionals/${i}-small.webp`);
        preloadImage(`../assets/img/our-journey/dev-class-2024_uk-nationals/${i}-small.webp`);
    }

    for (let i = 7; i <= imageCarouselDevClass2024_UKNationalsImages; i++) {
        preloadImage(`../assets/img/our-journey/dev-class-2024_uk-nationals/${i}-small.webp`);
    }
}

window.addEventListener("load", async function () {
    await preloadImages();

    setupCarousel_DevClass2024_LondonSouthRegionals();
    setupCarousel_DevClass2024_UKNationals();
    changeCar();
});