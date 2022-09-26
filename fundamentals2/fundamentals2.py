# Sigma
# Implement function sigma(num) that given a number, returns the sum of all positive integers up to number 
# (inclusive). Ex.: sigma(3) = 6 (or 1 + 2 + 3); sigma(5) = 15 (or 1 + 2 + 3 + 4 + 5).
def sigma(number):
    totalSum = 0
    for num in range(number+1):
        
        totalSum = num + totalSum
    print(totalSum)

sigma(5)

# Factorial
# Just the Facts, ma’am. Factorials, that is. Write a function factorial(num) that, given a number, returns the 
# product (multiplication) of all positive integers from 1 up to number (inclusive). 

# For example, factorial(3) = 6 (or 1 * 2 * 3); factorial(5) = 120 (or 1 * 2 * 3 * 4 * 5).
