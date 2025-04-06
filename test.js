// Function for addition
function add(a, b) {
    return a + b;
}

// Function for subtraction
function subtract(a, b) {
    return a - b;
}

// Function for multiplication
function multiply(a, b) {
    return a * b;
}

// Function for division
function divide(a, b) {
    if (b === 0) {
        return "Error: Division by zero is not allowed.";
    }
    return a / b;
}

// Calculator function
function calculator() {
    console.log("Welcome to the Calculator!");
    console.log("Options:");
    console.log("1. Addition");
    console.log("2. Subtraction");
    console.log("3. Multiplication");
    console.log("4. Division");
    console.log("5. Exit");

    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    function askQuestion() {
        rl.question("Choose an option (1-5): ", function (option) {
            const choice = parseInt(option);

            if (choice === 5) {
                console.log("Exiting the calculator. Goodbye!");
                rl.close();
                return;
            }

            if (choice < 1 || choice > 5 || isNaN(choice)) {
                console.log("Invalid choice. Please try again.");
                askQuestion();
                return;
            }

            rl.question("Enter the first number: ", function (num1) {
                rl.question("Enter the second number: ", function (num2) {
                    const a = parseFloat(num1);
                    const b = parseFloat(num2);

                    if (isNaN(a) || isNaN(b)) {
                        console.log("Invalid input. Please enter valid numbers.");
                        askQuestion();
                        return;
                    }

                    let result;
                    switch (choice) {
                        case 1:
                            result = add(a, b);
                            console.log(`Result: ${a} + ${b} = ${result}`);
                            break;
                        case 2:
                            result = subtract(a, b);
                            console.log(`Result: ${a} - ${b} = ${result}`);
                            break;
                        case 3:
                            result = multiply(a, b);
                            console.log(`Result: ${a} * ${b} = ${result}`);
                            break;
                        case 4:
                            result = divide(a, b);
                            console.log(`Result: ${a} / ${b} = ${result}`);
                            break;
                    }

                    askQuestion();
                });
            });
        });
    }

    askQuestion();
}

// Start the calculator
calculator();