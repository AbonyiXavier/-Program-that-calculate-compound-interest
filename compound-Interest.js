// Question 1
// If an amount of N5,000 is deposited into a savings account at an annual interest rate of 5%, compounded monthly, the value of the investment after 10 years can be calculated as follows...

// P = 5000.
// r = 5/100 = 0.05 (decimal).
// n = 12.
// t = 10.

// Psuedo code
// declare principal with a value.
// declare time in some variable say time with a value.
// declare rate in some variable say rate with a value.
// Calculate compound interest using formula,
// CompoundInterest = principal * (1 + rate / 100)  time) or principal * Math.pow(1 + rate / (n * 100), n * time) .
// Finally, print the resultant value of CompoundInterest.

// declaring of variables
let principal = 5000;
let rate = 0.05;
let n = 12; // n = the number of times that interest is compounded per unit
let time = 10;

// let CompoundInterest = principal * Math.pow(1 + rate / 100, time);
let CompoundInterest = principal * Math.pow(1 + rate / (n * 100), n * time);

console.log(CompoundInterest);
console.log("The total amount is " + CompoundInterest.toFixed(2));
console.log(
  "The interest is " + (CompoundInterest.toFixed(2) - principal).toFixed(2)
);
