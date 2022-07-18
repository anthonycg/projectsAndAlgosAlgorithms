// Remove Blanks
// Create a function that, given a string, returns all of that string’s contents, but without blanks. 

// Examples:

// removeBlanks(" Pl ayTha tF u nkyM usi c ") => "PlayThatFunkyMusic"
// removeBlanks("I can not BELIEVE it's not BUTTER") => "IcannotBELIEVEit'snotBUTTER"

function removeBlanks(string) {
    let newString = ""
    for (let i=0; i<string.length; i++) {
        if (string[i] != " ") {
            newString = newString + string[i]
        }
    }
    console.log(newString)
}

removeBlanks("hello what up")