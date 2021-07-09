class Box{
constructor(x,y,w,h){
    var v1 ={
        restitution:1,
        density:0.8

    }
    this.w=w,
    this.h=h
     this.body=Bodies.rectangle(x,y,w,h,v1)   
    World.add(world,this.body)
    
}
display(){
    var pos = this.body.position
    var angle=this.body.angle
    push()
    translate(pos.x,pos.y)
    rotate(angle),
    rectMode(CENTER)
    rect(0,0,this.w,this.h)
    pop()
}
}
