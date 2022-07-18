// Insert At
// Given an array, index, and additional value, insert the value into array at given index. You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val). You may use .push(), you are able do this without it though!

// Examples:

// insertAt([100,200,5], 2, 311) => [100,200,311,5]
// insertAt([9,33,7], 1, 42) => [9,42,33,7]

function insertAt(array, index, val) {
    newArray = []
    for (let i = 0; i < array.length; i++) {
        if (i == index) {
            newArray.push(val)
        }
        newArray.push(array[i])
    }
    console.log(newArray)
}

insertAt([1,2,3,4],2,15)