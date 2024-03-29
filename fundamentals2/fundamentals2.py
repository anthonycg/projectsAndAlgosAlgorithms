# Sigma
# Implement function sigma(num) that given a number, returns the sum of all positive integers up to number 
# (inclusive). Ex.: sigma(3) = 6 (or 1 + 2 + 3); sigma(5) = 15 (or 1 + 2 + 3 + 4 + 5).
from tracemalloc import start


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

def factorial(number):
    totalProduct = 1
    if number == 0:
        totalProduct = 0
    for num in range(1,number+1):
        totalProduct *= num
    print(totalProduct)

factorial(5)
factorial(3)
factorial(0)

# Star Art
# Assume that you have a text field that is exactly 75 characters long. You want to fill it with spaces and 
# asterisks ('*'), sometimes called stars. You should print the given number of asterisks consecutively. 
# Depending on which function is called, those stars should be left-justified (the first star would be very first 
# char in the text field), or right-justified (the last star would be very last char in the text field, with 
# potentially some number of spaces at beginning of text field before the block of stars start), or centered in 
# the 75- character text field (with the same number of spaces on either side of the block of stars, plus/minus one).

# Write a function drawLeftStars(num) that accepts a number and prints that many asterisks.
# Write a function drawRightStars(num) that prints 75 characters total. Stars should build from the right side. 
# The last num characters should be asterisks; the other 75 should be spaces.   
# Write function drawCenteredStars(num) that prints 75 characters total. The stars should be centered in the 75. 
# The middle num characters should be asterisks; the rest of the 75 spaces.
# (Optional) Create epic text-art Empire vs. Rebellion battle scenes, with ships like (=*=)and >o<.


def drawLeftStars(numberOfStars):
    finalString = ''
    starCount = 0
    for num in range(76):
        if starCount < numberOfStars:
            finalString += '*'
        else:
            finalString += '_'
        starCount += 1
    print(finalString)

drawLeftStars(3)

def drawRightStars(number):
    finalString = ''
    for num in range(75):
        finalString += '_'
    print(finalString)

drawRightStars(5)


# Character Art
# From the above, derive the following that accepts and draws the given characters, not just asterisks:

# drawLeftChars(num,char)
# drawRightChars(num,char)
# drawCenteredChars(num,char)
# For all three of these, you can safely assume that 'char'is a string with the length of 1.

 

# It is imperative at this point in the bootcamp that you can rapidly complete the mandatory coding challenges from 
# the Algorithm Platform. If you have not yet correctly answered each of them in under two minutes, then revisit the 
# Algorithm Platform, “Reset All Challenges”, and see how speedily you can complete them. Repeat until you can reliably
# finish each of them in less than two minutes.

