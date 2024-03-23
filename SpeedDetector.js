//code starts here
//first declare a function to.calculateDemeritPoints
//declare function to be calculateDemeritPoints.to.speed
function calculateDemeritPoints(speed) {
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
    //use conditionals if and else to validate speed limit
    if (speed <= speedLimit) {
        return "Ok";
    } else {
        const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
        if (demeritPoints > 12) {
            return "License suspended";
        } else {
            return "Points: " + demeritPoints;
        }
    }
}

