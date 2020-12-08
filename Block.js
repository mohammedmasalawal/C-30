class Block  {
  constructor(x, y, width, height){
    var options = {
      'restitution':0.8,
      'friction':1.0,
      'density':1.0,
      
      
  }
  this.body = Bodies.rectangle(x, y, width, height, options);
  this.width = width;
  this.height = height;
  
  World.add(world, this.body);
  this.Visibility=255;
}
display(){
 
  
  if(this.body.speed < 3){
    push();
    var angle = this.body.angle;
  translate(this.body.position.x, this.body.position.y);
  rotate(angle);
  rectMode(CENTER);
  //fill("pink");
  rect(0, 0, this.width, this.height);
  pop();
  }
  else{
    World.remove(world, this.body);
    push();
    this.Visiblity = this.Visiblity - 5;
    tint(255,this.Visiblity);
  //  image(this.image, this.body.position.x, this.body.position.y, 50, 50);
    pop();
  }
}

    
  }


