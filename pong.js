// wybór canvas
const cvs = document.getElementById("pong");
const ctx = cvs.getContext("2d");

// tworzenie paletek/rakiet gracza

const user = {
    x : 0,
    y : cvs.height/2 - 100/2,
    width : 10,
    height : 100,
    color : "WHITE",
    score : 0
};

// tworzenie paletek/rakiet komputera

const com = {
    x : cvs.width - 10,
    y : cvs.height/2 - 100/2,
    width : 10,
    height : 100,
    color : "WHITE",
    score : 0
};

// tworzenie piłeczki

const ball = {
    x : cvs.width/2,
    y : cvs.height/2,
    radius : 10,
    speed : 5,
    velocityX : 5,
    velocityY : 5,
    color : "WHITE"
};

// rysowanie funkcji - przestrzeń robocza
function drawRect(x, y, w, h, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x,y,w,h);
}


// tworzenie koła

function drawCircle(x,y,r,color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x,y,r,0,Math.PI*2,false);
    ctx.fill();
}

drawCircle(100,100,50,"WHITE");

// text

function drawText(text,x,y,color) {
    ctx.fillStyle = color;
    ctx.font = "45px fantasy";
    ctx.fillText(text,x,y);
}

drawText("something",300,200, "WHITE");


// render Gry

function  render() {
    // czyszczenie parapetrów/canvas
    drawRect(0, 0, cvs.width, cvs.height, "black");

    // siatka na stole
    drawNet();

    // punktacja
drawText(user.score,cvs.width/4,cvs.height/5,"WHITE");
drawText(com.score,3*cvs.width/4,cvs.height/5,"WHITE");

// paletki gracza i komputera
    drawRect(user.x, user.y, user.width, user.height, user.color);
    drawRect(com.x, com.y, com.width, com.height, com.color);

    // piłeczka
    drawCircle(ball.x, ball.y, ball.radius, ball.color);
}