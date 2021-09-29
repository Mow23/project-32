class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.3,
            length: 5
        }
       /* this.image1 = loadImage("sprites/sling1.png");
        this.image2 = loadImage("sprites/sling2.png");
        this.image3 = loadImage("sprites/sling3.png");*/
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }
    attach(body){
        this.sling.bodyA = body;
    }
    display(){

      /*  image(this.image1, 200, 25);
        image(this.image2, 170, 25);*/

        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push ();
            if (pointA.x<200){
                strokeWeight(3);
                stroke("pink");
            line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
          //  image(this.image3, pointA.x-30, pointA.y-20, 15, 30);
            } else {
                strokeWeight(6);
                stroke("pink");
            line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
         //   image(this.image3, pointA.x-30, pointA.y-20, 15, 30);
            }
            pop ();
        }
        
    }
    
}