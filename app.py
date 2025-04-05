def calculator():
    """
    A simple calculator function that allows users to perform basic arithmetic operations.

    The calculator provides the following options:
    1. Addition
    2. Subtraction
    3. Multiplication
    4. Division
    5. Percentage
    6. Exit

    The user is prompted to select an operation and input the required numbers.
    The function handles invalid inputs and prevents division by zero.

    Usage:
    - Run the function to start the calculator.
    - Follow the prompts to perform calculations or exit.

    Exceptions:
    - Handles ValueError for invalid numeric inputs.
    - Displays an error message for division by zero.

    Returns:
    - Prints the result of the selected operation or an error message for invalid inputs.
    """
    while True:
        print("\nSelect operation:")
        print("1. Add")
        print("2. Subtract")
        print("3. Multiply")
        print("4. Divide")
        print("5. Percentage")
        print("6. Exit")

        try:
            choice = int(input("Enter choice (1/2/3/4/5/6): "))
            if choice == 6:
                print("Exiting the calculator. Goodbye!")
                break
            if choice not in [1, 2, 3, 4, 5]:
                print("Invalid choice. Please try again.")
                continue

            num1 = float(input("Enter first number: "))
            if choice == 5:
                print(f"The result is: {num1 / 100}")
                continue

            num2 = float(input("Enter second number: "))

            if choice == 1:
                print(f"The result is: {num1 + num2}")
            elif choice == 2:
                print(f"The result is: {num1 - num2}")
            elif choice == 3:
                print(f"The result is: {num1 * num2}")
            elif choice == 4:
                if num2 == 0:
                    print("Error: Division by zero is not allowed.")
                else:
                    print(f"The result is: {num1 / num2}")
        except ValueError:
            print("Invalid input. Please enter numeric values.")

if __name__ == "__main__":
    calculator()