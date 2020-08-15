class Target{
    constructor(x,y,width,height){
        var options={
            isStatic:true,
           // restitution:2.0
        
        }
        this.body = Bodies.rectangle(x,y,width,height,options)
        this.width = this.width
        this.height = this.height
        World.add(world,this.body)
    }
    display(){
        
            var pos =this.body.position;
           // var angle = this.body.angle;
            push();
            translate(pos.x, pos.y);
           // rotate(angle);
            rectMode(CENTER);
           // strokeWeight(5);
           // stroke("green")
            fill(255);
            rect(0, 0, this.width, this.height);
            pop();
          } 
        
    
}