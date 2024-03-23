//code starts here
//first declare a function for the grade generator
//declare function to be calculateGrade.to.marks
function calculateGrade(marks) {
    //use if and else if condition to assign each mark a grade
    if (marks > 79) {
        return 'A';
    } else if (marks >= 60 && marks <= 79) {
        return 'B';
    } else if (marks >= 50 && marks <= 59) {
        return 'C';
    } else if (marks >= 40 && marks <= 49) {
        return 'D';
    } 
     else if (marks >= 0 && marks <= 39) {
    return 'E';
    } 
    //use else for any other value that is not marks
    else {
    return 'Invalid marks';
    }
}

//example tests
console.log(calculateGrade(81)); //you will get A
console.log(calculateGrade(76)); //brings back B