
//   speed limit = 70 
// 5 -> 1 point 
// math.floor (1.3)
// 12 points -> suspended 


const speed = checkSpeed (160) ;

function checkSpeed (speed) {
    const speedLimit = 70;
    const KmPerPoints = 5;
    // speed in limit 

    if (speed < speedLimit + KmPerPoints ) {
         console.log("ok");
         return ;
    }
    
   
        const points = Math.floor ((speed - speedLimit) / KmPerPoints);
        if (points >= 12)
            console.log ('License suspended');
        else 
        console.log ('points' , points);
    
}
