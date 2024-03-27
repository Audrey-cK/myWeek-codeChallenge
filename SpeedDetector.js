//code starts here
//first declare a function to.calculateDemeritPoints
//declare function to be calculateDemeritPoints.to.speed
function calculateDemeritPoints(speed) {

    const speedLimit = 70;
    const kmPerPoint = 5;
  
    if (speed < speedLimit) {
      return "Ok";
    } else {
      let demeritPoints = Math.floor((speed - speedLimit) / kmPerPoint);
      if (demeritPoints > 12) {
        return "License suspended";
      } else {
        return "Points: " + demeritPoints;
      }
    }
  }
  
  function getUserInput() {
    let speed = parseFloat(prompt("Enter car speed (km/h):"));
    if (isNaN(speed)) {
      alert("Invalid input! Please enter a valid number.");
      return getUserInput();
    }
    return speed;
  }
  
  function displayDemeritPoints() {
    let speed = getUserInput();
    let result = calculateDemeritPoints(speed);
    alert(result);
  }
  //call back the function to get results
  displayDemeritPoints();
