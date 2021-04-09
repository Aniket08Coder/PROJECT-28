  class Paper {
  constructor(x,y,widht,height){
  var options = {
 'isStatc': false,
 'restitution' : 0.3,
 'friction' : 0.5,
 'density' : 1.2
  }  
 this.body = Bodies.rectangle(x,y,20,20,options);
 this.width = 20;
 this.height =20;
 World.add(world, this.body);

 this.body= loadImage(crumpledPapertemplate/paper.png);

}   
 display() {
  push()
  translate(posLeft.x, posLeft.y);
  rectMode(CENTER)
  strokeWeight(4);
  angleMode(RADIANS)
  fill(255)
  rotate(this.angle)
  rect(0,0,this.wallThickness, this.dustbinHeight);
  pop()

  push()
  translate(posRight.x, posRight.y);
  rectMode(CENTER)
  strokeWeight(4);
  angleMode(RADIANS)
  fill(255)
  rotate(-1*this.angle)
  rect(0,0,this.wallThickness, this.dustbinHeight);
  pop()

  push()
  translate(posBottom.x, posBottom.y+10);
  rectMode(CENTER)
  strokeWeight(4);
  angleMode(RADIANS)
  fill(255)
  rect(0,0,this.dustbinWidth, this.wallThickness);
  pop()
 }
}