//------------08 kyu----------
// дубликаты массива
/*
Define a function that removes duplicates from an array of non negative numbers and returns it as a result.

    The order of the sequence has to stay the same.*/

function distinct(a) {
    // a.filter((value, index, a)=>{a.indexOf(value) === index};
    return [...new Set(a)];
}

console.log(distinct([1, 1, 2, 3, 4, 4, 4, 4, 5, 5, 5, 1, 1, 1, 1]));


// Return a new array consisting of elements which are multiple of their own index in input array (length > 1).

function multipleOfIndex(array) {
    return array.filter((e, index) => {
        return index === 0 ? e === 0 : e % index === 0
    })
}

console.log(multipleOfIndex([0, 2, 3, 6, 9]))


/*
If you've completed this kata already and want a bigger challenge, here's the 3D version

Bob is bored during his physics lessons so he's built himself a toy box to help pass the time. The box is special because it has the ability to change gravity.

There are some columns of toy cubes in the box arranged in a line. The i-th column contains a_i cubes. At first, the gravity in the box is pulling the cubes downwards. When Bob switches the gravity, it begins to pull all the cubes to a certain side of the box, d, which can be either 'L' or 'R' (left or right). Below is an example of what a box of cubes might look like before and after switching gravity.

+---+                                       +---+
|   |                                       |   |
+---+                                       +---+
    +---++---+     +---+              +---++---++---+
|   ||   |     |   |   -->        |   ||   ||   |
+---++---+     +---+              +---++---++---+
    +---++---++---++---+         +---++---++---++---+
|   ||   ||   ||   |         |   ||   ||   ||   |
+---++---++---++---+         +---++---++---++---+
    Given the initial configuration of the cubes in the box, find out how many cubes are in each of the n columns after Bob switches the gravity.

Examples (input -> output:
* 'R', [3, 2, 1, 2]      ->  [1, 2, 2, 3]
* 'L', [1, 4, 5, 3, 5 ]  ->  [5, 5, 4, 3, 1]*/

const flip = (d, a) => {
    return d === "R" ? a.sort((a, b) => a - b) : a.sort((a, b) => a - b).reverse()
}

console.log(flip("L", [3, 2, 1, 2]))

/*
SpeedCode #2 - Array Madness  https://www.codewars.com/kata/56ff6a70e1a63ccdfa0001b1*/
function arrayMadness(a, b) {
    // Ready, get set, GO!!!
    let arrayA = a.map(a => a ** 2).reduce((acc, current) => acc + current)
    let arrayB = b.map(b => b ** 3).reduce((acc, current) => acc + current)

    return arrayA > arrayB

}

console.log(arrayMadness([4, 5, 6], [1, 2, 3]))

// Sum of differences in array https://www.codewars.com/kata/5b73fe9fb3d9776fbf00009e/train/javascript

function sumOfDifferences(arr) {
    const sortedArr = arr.sort((a, b) => b - a);
    let sum = 0;
    for (let i = 0; i < sortedArr.length - 1; i++) {
        sum += sortedArr[i] - sortedArr[i + 1];
    }
    return sum;
}

console.log(sumOfDifferences([1, 2, 10]))

// Printing Array elements with Comma delimiters https://www.codewars.com/kata/56e2f59fb2ed128081001328/train/javascript

function printArray(array) {
    //show me the code!
    return array.join(",")
}

console.log(printArray(["h", "o", "l", "a"]))

// Enumerable Magic #25 - Take the First N Elements https://www.codewars.com/kata/545afd0761aa4c3055001386/train/javascript
function take(arr, n) {
    // Your code here
    return arr.slice(0,n)
}

console.log(take([0, 1, 2, 3, 5, 8, 13], 3))

// Enumerable Magic - Does My List Include This? https://www.codewars.com/kata/545991b4cbae2a5fda000158/train/javascript

function include(arr, item){
return arr.includes(item)
}

console.log(include([1,2,3,4], 3))