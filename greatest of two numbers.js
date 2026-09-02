// Function to find the greatest of two numbers
function findGreatest(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

// Alternative: Using ternary operator (more concise)
function findGreatestTernary(num1, num2) {
    return num1 > num2 ? num1 : num2;
}

// Alternative: Using Math.max() method (most concise)
function findGreatestMathMax(num1, num2) {
    return Math.max(num1, num2);
}

// Example usage:
console.log(findGreatest(15, 8));           // Output: 15
console.log(findGreatestTernary(25, 30));   // Output: 30
console.log(findGreatestMathMax(42, 17));   // Output: 42

// Interactive version with user input (uncomment to use in browser console)
/*
const num1 = prompt("Enter first number:");
const num2 = prompt("Enter second number:");
const greatest = findGreatest(parseFloat(num1), parseFloat(num2));
alert(`The greatest number is: ${greatest}`);
*/