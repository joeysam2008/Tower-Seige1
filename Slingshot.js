class Slingshot {
    constructor(bodyA, pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.08,
            speed: 0.5,
            length: 10
        }
        this.pointB= pointB
        this.sling = Constraint.create(options)
        World.add(world,this.sling)
    }

    fly() {
        this.sling.bodyA = null;
    }

    display() {
        if (this.sling.bodyA) {
            var bodyA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(bodyA.x, bodyA.y, pointB.x, pointB.y);
        }
    }

    
}
