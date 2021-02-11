var a,b;
function setup(){
createCanvas(800,400)
a = createSprite(500,400,20,20);
b = createSprite(300,200,50.50);

}

function draw(){
background(0);
a.y = mouseY;
a.x = mouseX;
console.log(a.x-b.x);
if (a.x-b.x<a.width/2+b.width/2 && b.y-a.y<a.height/2+b.height/2){
  a.shapeColor = "red";
  b.shapeColor = "red";
}else{
  a.shapeColor = "green";
  b.shapeColor = "green";
}
drawSprites();

}
