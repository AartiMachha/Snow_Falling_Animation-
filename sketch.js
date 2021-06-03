
var backgroundImg;

var snows=[];

function preload(){
backgroundImg = loadImage("snow1.jpg");

}


function setup() {
  createCanvas(950,550);

 
  
}

function draw() {
  background(backgroundImg); 
  
  if(frameCount%10===0){
    snows.push(new Snow(10,940),10,8)
  }
  
  for (var s = 0; s < snows.length; s++){
    snows[s].display();
  }

  drawSprites();
}