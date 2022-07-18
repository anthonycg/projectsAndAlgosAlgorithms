// # Push Front
// # Given an array and an additional value, insert this value at the beginning of the array. You may use .push(), you are able do this without it though!

// # Examples:

// # pushFront([5,7,2,3], 8) => [8,5,7,2,3]
// # pushFront([99], 7) => [7,99]

function pushFront(array, num) {
    newArray = [num]
    for (let i=0;i<array.length;i++) {
        newArray.push(array[i])
    }
    console.log(newArray)
}

pushFront([2,454,6,56,1,2,3],5)