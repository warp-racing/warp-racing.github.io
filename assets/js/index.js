document.getElementById("welcome").addEventListener("mousemove", function parallax(event) {
    let _w = window.innerWidth / 2;
    let _h = window.innerHeight / 2;
    let _mouseX = event.clientX;
    let _mouseY = event.clientY;

    this.style.backgroundPosition = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.01}% , ${50 - (_mouseX - _w) * 0.02}% ${50 - (_mouseY - _h) * 0.02}% , ${50 - (_mouseX - _w) * 0.06}% ${50 - (_mouseY - _h) * 0.06}%`;
});