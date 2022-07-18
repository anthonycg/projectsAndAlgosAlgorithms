// Get Digits
// Create a JavaScript function that given a string, returns the integer made from the string’s digits. You are allowed to use isNaN() and Number().

// Examples:

// getDigits("abc8c0d1ngd0j0!8") => 801008

// getDigits("0s1a3y5w7h9a2t4?6!8?0") => 1357924680

function getDigits(string) {
    numbers = ""
    for (let i=0; i< string.length; i++) {
        if (Number(string[i]) || string[i]==0) {
            numbers = numbers + string[i]
        }
    }
    console.log(numbers)
}

getDigits("abc8c0d1ngd0j0!8")
getDigits("0s1a3y5w7h9a2t4?6!8?0")
