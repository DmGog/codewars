// The museum of incredibly dull things
// The museum of incredibly dull things wants to get rid of some exhibits. Miriam, the interior architect, comes up with a plan to remove the most boring exhibits. She gives them a rating, and then removes the one with the lowest rating.
//
//     However, just as she finished rating all exhibits, she's off to an important fair, so she asks you to write a program that tells her the ratings of the exhibits after removing the lowest one. Fair enough.
//
// Task
// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with the lowest index. If you get an empty array/list, return an empty array/list.
//
//     Don't change the order of the elements that are left.
//
// Examples
// * Input: [1,2,3,4,5], output = [2,3,4,5]
//     * Input: [5,3,2,1,4], output = [5,3,2,4]
//     * Input: [2,2,1,2,1], output = [2,2,2,1]

function removeSmallest(numbers) {
    if (numbers.length > 0) {
        const minIndex = numbers.indexOf(Math.min(...numbers));
        return numbers.filter((_, index) => index !== minIndex)
    }
    return [];
}

console.log(removeSmallest([2, 2, 1, 2, 1]))

// Your task is to split the chocolate bar of given dimension n x m into small squares. Each square is of size 1x1 and unbreakable. Implement a function that will return minimum number of breaks needed.
//
//     For example if you are given a chocolate bar of size 2 x 1 you can split it to single squares in just one break, but for size 3 x 1 you must do two breaks.
//
//     If input data is invalid you should return 0 (as in no breaks are needed if we do not have any chocolate to split). Input will always be a non-negative integer.

function breakChocolate(n, m) {
    if (n <= 0 || m <= 0) {
        return 0;
    }
    return (n * m) - 1;
}

console.log(breakChocolate(5, 5))

// Find the capitals https://www.codewars.com/kata/539ee3b6757843632d00026b/train/javascript

const capitals = function (word) {
    // Write your code here
    let c = []
    for (let i = 0; i < word.length; i++) {
        if(word[i] === word[i].toUpperCase()) {
            c.push(i);
        }
    }
    return c
};

console.log(capitals('CodEWaRs'))