class Ball{
    constructor(x,y,radius){
        var options = {
            restitution:2.0,
            isStatic:false,
            friction:0.5,
            density:1.2
     } 
        this.body = Bodies.circle(x,y,radius,options)
        this.radius = this.radius
        World.add(world, this.body)
       }
       display(){

          ellipse();
          ellipse(300,760,50);
          //keyPressed();
          
                }
}




