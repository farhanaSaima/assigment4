function calculateMonthlyExpenses(expensesArray, monthlyIncome) {
    
    if (
        !Array.isArray(expensesArray) ||
        typeof monthlyIncome !== "number" ||
        expensesArray.some(expense => typeof expense !== "number")
    ) {
        return "Invalid Input";
    }
const totalExpenses = expensesArray.reduce((sum, expense) => sum + expense, 0);
const savings = monthlyIncome - totalExpenses;
return savings > 0 ? savings : "Save more money";
}
console.log(calculateMonthlyExpenses([3000, 2000, 1500], 15000));  
console.log(calculateMonthlyExpenses([10000, 2000], 5000));        
console.log(calculateMonthlyExpenses("Invalid Array", 10000));    
console.log(calculateMonthlyExpenses([5000, 7000], "Invalid"));    