
function fixWeightMachine(inputArray) {
    
    if (!Array.isArray(inputArray)) {
        return "Invalid Input";
    }

    
    const validWeights = inputArray.filter(item => 
        typeof item === "number" && item >= 0 && !isNaN(item)
    );

    return validWeights;
}


console.log(fixWeightMachine([50, -10, 0, 75, "a", null])); 
console.log(fixWeightMachine("Not an Array"));             
console.log(fixWeightMachine([100, NaN, -5, 30, undefined])); 
console.log(fixWeightMachine([]));                         
