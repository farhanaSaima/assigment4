function evaluateResult(inputArray) {
   
    if (!Array.isArray(inputArray)) {
        return "Invalid Input";
    }
const grades = inputArray.map(mark => {
        if (typeof mark !== "number" || isNaN(mark)) {
            return "Invalid";
        } else if (mark >= 80) {
            return "A+";
        } else if (mark >= 70) {
            return "A";
        } else if (mark >= 60) {
            return "A-";
        } else if (mark >= 50) {
            return "B";
        } else if (mark >= 40) {
            return "C";
        } else {
            return "F";
        }
    });

    return grades;
}
console.log(evaluateResult([45, 67, 82, 95, "a", null])); 
console.log(evaluateResult([90, 82, 70, 60, 50, 40]));    
console.log(evaluateResult(100));                         