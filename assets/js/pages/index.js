function getWidth() {
    return Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
}

let previousWidth = 0;

function updateModelViewer() {
    let width = getWidth();

    if (previousWidth == 0 || (previousWidth > 1000 && width < 1000) || (previousWidth < 1000 && width > 1000)) {
        let model_viewer = document.querySelector('model-viewer');

        if (width < 1000) {
            model_viewer.outerHTML = model_viewer.outerHTML.replace(`field-of-view="20deg"`, `field-of-view="1deg"`).replace(`poster="assets/model-viewer/poster.png"`, `poster="assets/model-viewer/poster_mobile.png"`);
        } else {
            model_viewer.outerHTML = model_viewer.outerHTML.replace(`field-of-view="1deg"`, `field-of-view="20deg"`).replace(`poster="assets/model-viewer/poster_mobile.png"`, `poster="assets/model-viewer/poster.png"`);
        }

        previousWidth = width;
    }
}

window.addEventListener('load', function () {
    updateModelViewer();
});

window.addEventListener('resize', function () {
    updateModelViewer();
});