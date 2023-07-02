

// Week 4 Coding Assignment 

// Step 1. 



let ages = [3, 9, 23, 64, 2, 8, 28, 93]; // I've created an array for the listed ages

console.log(ages);

    //1a

    let lastElement = ages.pop(); // Accessing the value of the last element with ages.pop, removing it from the array while maintaining its value.
    let firstElement = ages.shift(); // Accessing the value of the first element with ages.shift removing it from the array while maintaining its value.
    let subtractedValue = lastElement - firstElement; // Calculating the value via subtraction 

    console.log(subtractedValue); // print

    ages.unshift(firstElement); // Adding the first element back into the array
    ages.push(lastElement); // Adding the last element back into the array

    //1b 
 
    ages.push(26); // Adding the new age to the array

 console.log(ages);

    //1c

    let sum = 0; //creating variable for the loop
    for (let i = 0; i < ages.length; i++) { // starting for loop to calculate the sum of all ages
        sum += ages[i];
    }
    let averageAge = sum /ages.length; // creating a new variable finding the average of the sum
    console.log(averageAge); 


// Step 2. 


let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']; // Created an array with the names given

 // 2a 

    let totalLetters = 0; //Defining my variable as total letters
    for (let i = 0; i < names.length; i++) {
        totalLetters += names[i].length; // Created a loop to count the total letters in the array
    }

let averageLetters = // Creating a variable for the value of the average
totalLetters / names.length; // total letters divided by total names
console.log(averageLetters); 

// 2b

    let concatenatedNames = ''; //Creating a variable for concatenated names 
    for (let i = 0; i < names.length; i++) { // Created loop for concatenated names based on total names and letting 'i' represent the index
        concatenatedNames += names[i] + '';
    }
    console.log(concatenatedNames); 

// Step 3.

//Q: How do you access the last element of any array?
//A: You can do this by using the array name and the ".length" function to determine the total items in the array, since JavaScript starts from 0, we must extract 1 from the length of the array
// for example, for our ages array: 
let lastAge = ages[ages.length - 1]; // This will give the value added from Step 1
console.log(lastAge); 

// Step 4. 

//Q: How do you access the first element of any array?
//A: We can use the index for this without knowing the array length by using the index 0, since JavaScript starts from 0
let firstAge = ages[0];
console.log(firstAge);

// Step 5.

let namesLength = []; // Utilizing the previous array to create the new array, leaving the brackets open to not add new values 
    for (let i = 0; i < names.length; i++) { //Writing the loop but continuing to use the names array and finding the amount of names
        namesLength.push(names[i].length); // Using our new array name, .push(names[i].length) adds the length of the name at i to the namesLength array and add the new elements
    }
    console.log(namesLength);

// Step 6.

let sumOfNamesLength = 0; //defining the variable 
for (let i = 0; i < namesLength.length; i++) { //Creating a for loop to access and use the index of the namesLength array and retrieving/using the index from our newly created array
sumOfNamesLength += namesLength[i];
} 
console.log(sumOfNamesLength);

// Step 7. 

let repeatWord = (word,n) => // defining repeatWord as my variable, using parameters word and n as instructed and using an arrow function
word.repeat(n); // Using an arrow function to create a function for repetition, using our n parameter to represent the number of times I'd like to repeat
console.log(repeatWord('Alright ', 3)); // returning the function through our variable and given word and n value 

// Step 8.

let fullName = (firstName, lastName) => `${firstName} ${lastName}`; // allowing fullName to be my variable, I used an arrow function to perform a template literal
console.log(fullName('Jon','Lee'));

//Step 9.

let sumNumberArray = [10, 20, 30, 40, 50]; //creating an array of numbers for the execise
let isSumGreaterThan100 = number => number.reduce((sum, num) => sum + num, 0) > 100; // Declaring the function while using the array sum calculation (found on Google), reduce() is used to calculate the sum, followed by (sum, num) => sum + num which is adding each number to the sum and, then comparing it to 100. 
console.log(isSumGreaterThan100(sumNumberArray));

// Step 10
let averageArray = [2,4,6,8,10] //creating an array of numbers for the execise
let calculateAverage = numbers =>  // Declaring the function while using the array sum calculation, reduce() is used to calculate the sum, followed by (sum, num) => sum + num which is adding each number to the sum and then dividing it by the .length 
numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
console.log(calculateAverage(averageArray));

// Step 11: Getting Error with this one.

let isAverageGreaterThan = (array1, array2) => // Declaring the function 
    calculateAverage(array1) > calculateAverage(array2); //Using the code from our last question in an arrow function to calculate the average of the 2 undefined arrays, calling the function twice
console.log(isAverageGreaterThan([1,2,3], [4,5,6])); // calling the function and creating an array to place within our console.log for output

// Step 12:

let willBuyDrink = (isHotOutside, moneyInPocket) => // Declaring the function
isHotOutside && moneyInPocket > 10.50; // Checking if both conditions are true using logical and && operator
console.log(willBuyDrink(true, 12)); // Calling function and output (note: 12 is a random number)

// Step 13.

// My function is to calculate the amount of money left to complete a car loan payment. I created this function to show how much of the loan would have to be paid off, as well as the years remaining on the loan. 

let amountLeftOwedOnCar = (amount, payment, years) => { // Declaring the variable with 3 parameters I found essential 
    let months = years * 12;  // used to convert from years to months in order to break down the monthly payment
    let totalPayment = payment * months; // calculates total amount left
    let remainingBalance = amount - totalPayment; // What is left of the balance owed
    let remainingYears = remainingBalance / payment / 12; //How much time is left if the minimum payments are continued 
        return {
            amount: amount,
            payment: payment,
            years: years,
            remainingBalance: remainingBalance,
            remainingYears: remainingYears
        }; // declaring what I'd like to display with an object literal which defines properties and values
    }; 
    let carLoanDetails = // declaring the function
    amountLeftOwedOnCar(32000, 450, 5); // using random but logical number values in the places of amount, payment and years

    console.log(carLoanDetails); // Output of the function

    


















