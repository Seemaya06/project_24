class Dustbin {  
    constructor( x, y, width, height){
        var options = {
            'isStatic' : true
        }

        this.body1 = Bodies.rectangle(x,y, width, height,options );
	    World.add(world, this.body1);
        this.body1.width = width
        this.body1.height = height 
        
   }
   display(){
       fill(26, 83, 255);
       stroke(26, 83, 255)
       rect(this.body1.position.x, this.body1.position.y,this.body1.width, this.body1.height)
       
   }
}