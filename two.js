function countVowels(inputString) {
   
    if (typeof inputString !== "string") {
        return "Invalid Input";
    }
const vowels = ['a', 'e', 'i', 'o', 'u'];

   
    const vowelCount = inputString
        .toLowerCase()
        .split('')
        .filter(char => vowels.includes(char)).length;

    return vowelCount;
}
console.log(countVowels("hello"));       
console.log(countVowels("Bangladesh")); 
console.log(countVowels(12345));        
console.log(countVowels("rhythm"));     