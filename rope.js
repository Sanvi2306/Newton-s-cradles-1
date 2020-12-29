class Rope {
    constructor(bodyA,pointB){
    
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.9,
            length: 200
        }
        
       this.rope=Constraint.create(options);
       World.add(world,this.rope);
    
    }
    
    display(){
    
    var pointA=this.rope.bodyA.position;
    var pointB = this.rope.pointB;
    
    strokeWeight(5);
    //console.log(this.chain)
    fill("white");
    line(pointA.x,pointA.y,pointB.x,pointB.y)
    
    
    
    
    }
    
    }