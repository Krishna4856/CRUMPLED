class Paper{
    constructor(x,y,radius){
        var options={
            isStatic:false,
            restitution:0.03,
            friction:0.05,
            density:1
        }
        this.body=Bodies.circle(200,10,20,options);
        this.radius=3;
        this.image=loadImage("paper.png");
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
       
        var angle=this.body.angle;
       if(keyDown("up")){
         Matter.Body.applyForce(this.body,this.body.position,{x:25,y:-32})
       }
      //  image(this.image,500,400);
        push();
        translate(pos.x,pos.y);
        rotate(angle)
        strokeWeight(0);
        stroke("white");
        fill(255);
        imageMode(CENTER);
        image(this.image,5,1,100,100);
        this.body.visible=true;
        ellipseMode(RADIUS);
        ellipse(0,0,2);
        pop();
    }
}