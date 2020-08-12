class Target{
    constructor(x,y,width,height){
        this.body = Bodies.rectangle(x,y,width,height)
        this.width = this.width
        this.height = this.height
        World.add(world,this.body)
    }
    display(){
        rectMode(CENTER)
        rect(820,720,20,120);
        rect(900,770,150,20);
        rect(980,720,20,120);
    }
}