var canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
console.log("I love the DOM " + canvas.width);

var c = canvas.getContext("2d");
c.fillStyle = "gold";
c.fillRect(150, 70, 150, 90);
c.fillStyle = "black";
c.fillRect(250, 170, 250, 190);
c.fillStyle = "green";
c.fillRect(800, 570, 150, 190);
c.fillStyle = "purple";
c.fillRect(10, 730, 550, 90);
c.fillStyle = "crimson";
c.fillRect(1050, 70, 150, 790);

c.beginPath();
c.moveTo(350, 170);
c.lineTo(300, 100);
c.strokeStyle = "red";
c.stroke();

c.beginPath();
c.moveTo(1350, 570);
c.lineTo(500, 400);
c.lineTo(500, 900);
c.strokeStyle = "violet";
c.stroke();

c.beginPath();

c.arc(130, 230, 30, 0, Math.PI * 2, false);
c.strokeStyle = "violet";
c.fillStyle = "blue";
c.fill();
c.stroke();

var red = Math.random() * 255;
var blue = Math.random() * 255;
var green = Math.random() * 255;

var color = `rgb(${red}, ${blue}, ${green})`;

for (var i = 0; i < 10; i++) {
    // random color
  var red = Math.random() * 255;
  var blue = Math.random() * 255;
  var green = Math.random() * 255;

  var color = `rgba(${red}, ${blue}, ${green})`;
// random position
  var x = Math.random() * window.innerWidth;
  var y = Math.random() * window.innerHeight;

  //random size
  var size = Math.random() * 50;

  console.log(x);
  console.log(y);
  c.beginPath();
  c.arc(x, y, size, 0, Math.PI * 2, false);

  c.strokeStyle = color;
  c.fillStyle = color;
  c.fill();
  c.stroke();
}

console.log(c.strokeStyle);
