//code starts here
//first declare a function for the grade generator
//declare function to be calculateGrade.to.marks
function calculateGrade(mark) { 
    //use conditionals if,else if and else to assign grades
    if (mark > 79 && mark <= 100) {
      return "A";
    } else if (mark >= 60 && mark <= 79) {
      return "B";
    } else if (mark >= 50 && mark <= 59) {
      return "C";
    } else if (mark >= 40 && mark <= 49) {
      return "D";
    } else if (mark >= 0 && mark < 40) {
      return "E";
    } else {
      return "Invalid input! Please enter a mark between 0 and 100.";
    }
  }
  //create a function that enables the user to input marks
  function getUserInput() {
    let mark = parseFloat(prompt("Enter student mark (0-100):"));
    if (isNaN(mark)) {
      alert("Invalid input! Please enter a valid number.");
      return getUserInput();
    }
    return mark;
  }
  //create a function that allows users to get results message
  function displayGrade() {
    let mark = getUserInput();
    let grade = calculateGrade(mark);
    alert("The student grade is: " + grade);
  }
  //call the functions using displayGrade
  displayGrade();