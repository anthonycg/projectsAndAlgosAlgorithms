// Count Non-Spaces
// Create a function that, given a string, returns the number of non-space characters found in the string. 

// Examples:

// countNonSpaces("Honey pie, you are driving me crazy") => 29
// countNonSpaces("Hello world !") => 11

function countNonSpaces(string) {
    let count = 0
    for (let i= 0; i< string.length; i++) {
        if (string[i] != " ") {
            count++
        }
    }
    console.log(count)
}

countNonSpaces("Honey pie, you are driving me crazy")
countNonSpaces("Hello world !")