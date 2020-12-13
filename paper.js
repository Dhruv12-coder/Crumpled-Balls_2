class Ball {
    constructor(x,y,r){
        var options = {
            'restitution':0.3,
            'friction': 0.5, 
            'denstiy':0.5,
            'isStatic' : false
        }
        //console.log("paper is working ")
        this.y = y;
        this.x = x;
        this.r = r 
        this.body = Bodies.circle(this.x,this.y,this.r,options);
        World.add(world, this.body);
        this.image = loadImage("paper.png");
        this.image.scale = 0.1;
    }

    display(){
        //console.log("display is working ")
        
        push(); 
        var paperpos=this.body.position; 
        translate(paperpos.x, paperpos.y);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        //ellipse(0,0,this.r,this.r);
        pop();
        

    }
}