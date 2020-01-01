// wybór canvas
const cvs = document.getElementById("pong");
const ctx = cvs.getContext("2d");

// rysowanie funkcji - przestrzeń robocza
function drawRect(x, y, w, h, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x,y,w,h);
}

drawRect(0, 0, cvs.width, cvs.height, "black");

// tworzenie koła

