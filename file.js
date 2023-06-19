document.onkeydown = function(e){
    switch (e.keyCode) {
        case 37:
          //left
         if(x > !(0)) {
          pen(x, y, x - 5, y, ctx);
          x = x - 5;}
            break;
        case 38:
          //up
          if(y > !(0)){
          pen( x, y, x, y - 5, ctx);
			y = y - 5;}
            break;
        case 39:
            //right
        if(x < (696)) {
          pen(x, y, x + 5, y, ctx);
          x = x + 5;}
            break;
        case 40:
            if(y < (396)) {
           //down
           pen(x, y, x, y + 5, ctx)
            y= y + 5;}
            break; 
    };
}

let canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
document.addEventListener("keydown", clear);

let canvasWith = canvas.width;
let canvasHeight = canvas.height;

//start point
 let x = 2;
 let y = 2;

// pen
function pen(x_start, y_start, x_end, y_end, ctx) {
    ctx.beginPath();
	ctx.lineWidth = 5;
    ctx.strokeStyle = "#808080";
	ctx.moveTo(x_start,y_start);
	ctx.lineTo(x_end,y_end);
	ctx.stroke(); 
	ctx.closePath();
}
// tarbort ritningen
function clear(e) {
  if (e.keyCode == 67) {
    ctx.clearRect(0, 0, 700, 400);
  }
}
