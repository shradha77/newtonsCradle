class Sling{
    constructor(bodyA, bodyB,offsetX){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            pointB:{x:offsetX,y:0},
            stiffness: 1,
            angularStiffness:1,
            length: 200
        }
        this.pointB = offsetX
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }


    display(){
        
        
            var pointA = this.sling.bodyA.position;
            var pointB = this.sling.bodyB.position;
            push();
            
            stroke(48,22,8);
            
                strokeWeight(7);
                line(pointA.x , pointA.y, pointB.x + this.pointB, pointB.y);
            
            pop();
        
    }
    
}