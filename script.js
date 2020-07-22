fonOne = () => {
var canvas = document.getElementById("myCanvas");
canvas.height = window.innerHeight
let w = canvas.width = window.innerWidth

var ctx = canvas.getContext("2d");
// to draw the red rectangle
// ctx.fillStyle = "#FF0000";
// ctx.fillRect(0,0,200,100);

// //to draw the lines on the red rectangle
// ctx.moveTo(0, 0);
// ctx.lineTo(200,100);
// ctx.moveTo(0, 100);
// ctx.lineTo(200,0);
// ctx.stroke();

// to draw the circle

// for(var i=100; i<200; i+=10) {
// 	ctx.beginPath();
// 	ctx.arc(i, 250, 100, 0, 2*Math.PI);
// 	ctx.stroke();
// }
let i=100;
setInterval( () => {

  let x = Math.floor(Math.random() * canvas.width) + 1;
	  if(x>canvas.width) {x -= 100}
  let y = Math.floor(Math.random() * 500) + 1;
	  if(y>canvas.height) {y-=100}
ctx.beginPath();
	ctx.arc(x, y, 100, 0, 2*Math.PI);
	ctx.stroke();
	
	ctx.clearArc(x, y, 100);
},500)


// ctx.fillStyle ="green"
// ctx.fill();


// // Create gradient
// var grd = ctx.createLinearGradient(0, 0, 200, 0);
// grd.addColorStop(0, "red");
// grd.addColorStop(1, "white");

// // Fill with gradient
// ctx.fillStyle = grd;
// ctx.fillRect(10, 10, 150, 80);


// // Create gradient
// var grd = ctx.createRadialGradient(75, 50, 5, 90, 60, 100);
// grd.addColorStop(0, "red");
// grd.addColorStop(1, "white");

// // Fill with gradient
// ctx.fillStyle = grd;
// ctx.fillRect(10, 10, 150, 80);
}
