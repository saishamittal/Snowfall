class Snowfall{
    constructor (x,y) {
        var options = {
            friction : 0.1,
            restitution : 0.2,  
         } 
         this.snow = Bodies.circle(x,y,40,options)
         this.radius = 40;
         this.image = loadImage("snow4.webp");
         this.lifeTime = 100
         World.add(world,this.snow)
    }
    display() {
        imageMode(CENTER)
        image(this.image,this.snow.position.x, this.snow.position.y, this.radius, this.radius)
    }
    updateY() {
        if(this.snow.position.y>height) {
            Matter.Body.setPosition(this.snow,{x:random(0,width-20),y:random(0,50)})
        }
    }
}