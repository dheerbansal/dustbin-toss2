class Ball{
    constructor(x,y,radius){
        var options = {
            restitution:0.2,
            isStatic:false,
            friction:0.5,
            density:1.2
     } 
     this.radius = this.radius
        this.x = x;
        this.y = y;
        this.body = Bodies.circle(this.x,this.y,this.radius,options)
        
        
        World.add(world, this.body)
       }
       display(){
          var pos = this.body.position;
         push();
          translate(pos.x,pos.y);
          rectMode(CENTER)
          strokeWeight(3)
          fill("white")
          //ellipse();
          ellipse(0,0,this.radius,this.radius);
          pop();
          
          //keyPressed();
          
                }
}




