class Ball{
    constructor(x,y,radius){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:1.3,
            density:0.9
        }
        
        this.radius = radius
        this.x = x
        this.y = y
        this.image= loadImage("paper.png")
        this.body = Bodies.circle(this.x,this.y,this.radius/2,options)
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position;
       push();
        translate(pos.x,pos.y);
        rectMode(CENTER)
        strokeWeight(3)
        fill("white")
        image(this.image,0,0,this.radius,this.radius);
        pop();
        
        
              }
}
