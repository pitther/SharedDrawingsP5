var socket;

function setup(){
  createCanvas(400, 400);
  background(51);
  noStroke();

  socket = io.connect('http://localhost:3000');
  socket.on('mouse', newDrawig);
}

function newDrawig(data){
  fill(255,0,100);
  ellipse(data.x, data.y, 40, 40);
}

function mouseDragged(){
  var data = {
    x : mouseX,
    y : mouseY
  }

  socket.emit('mouse', data);
  fill(255);
  ellipse(mouseX, mouseY, 40, 40);
}


function draw(){

}
