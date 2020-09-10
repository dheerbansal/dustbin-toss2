class Ball{
    constructor(x,y,radius){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.radius = 50
        this.x = x
        this.y = y
        this.image = loadImage("paper.png");
        this.body = Bodies.circle(this.x,this.y,this.radius,options)
        World.add(world,this.body)

        

        
    }

    
    
    display(){
        var pos = this.body.position;
       push();
        translate(pos.x,pos.y);
        rectMode(CENTER)
        strokeWeight(3)
        fill("purple")
        image(this.image, 0, 0, this.radius);
     // image(0,0,this.radius,this.radius)
        pop();
        
        
              }
            }