// CITYSCAPE ASGN START CODE

// Set up Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 300;
cnv.height = 650;

windX = 170
windNum = 0
windY = 370
windNum2 = 0

// BLUE BACKGROUND
ctx.fillStyle = "blue";
ctx.fillRect(0, 0, cnv.width, cnv.height);

// DRAW LEFT BUILDING
ctx.fillStyle = "black";
// Building Base
ctx.fillRect(0, 350, 150, 300);
// Middle Section
ctx.fillRect(20, 200, 110, 150);
// Triangle Top
ctx.beginPath();
ctx.moveTo(20, 200);
ctx.lineTo(130, 200);
ctx.lineTo(130, 100);
ctx.fill();

// DRAW RIGHT BUILDING
ctx.fillStyle = "black";
// Building Base
ctx.fillRect(150, 100, 150, 550);
// Medium Top
ctx.fillRect(170, 40, 110, 60);
// Small Top
ctx.fillRect(190, 20, 70, 20);

for (windNum = 0; windNum < 5; windNum++) {
    ctx.fillStyle = "white"
    ctx.fillRect(windX, 120, 15, 500)
    windX += 25
}

for (windNum2 = 0; windNum2 < 6; windNum2++) {
    ctx.fillStyle = "white"
    ctx.fillRect(20, windY, 110, 25)
    windY += 45
}
let x = 25;
for(let n = 0; n < 4; n++){
    let y = 200;
    x += 20
    for(let m = 0; m < 6; m++) {
        ctx.fillStyle = "white";
        ctx.fillRect(x, y, 10, 10);
        y += 20
    }
}