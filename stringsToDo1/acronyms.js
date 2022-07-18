// Acronyms
// Create a function that, given a string, returns the string’s acronym (first letter of the word capitalized). You are allowed to use .split() and .toUpperCase().

// acronym(" there's no free lunch - gotta pay yer way. ") => "TNFL-GPYW". 

// acronym("Live from New York, it's Saturday Night!") => "LFNYISN".

function acronym(string) {
    let newString = ""
    for (let i = 0; i<string.length;i++) {
        if (string[i] == string[0] || string[i-1] == " ") {
            newString = newString + string[i].toUpperCase()
        } 
    }
    console.log(newString)
}

acronym("Live from New York, it's Saturday Night!")
acronym(" there's no free lunch - gotta pay yer way. ")