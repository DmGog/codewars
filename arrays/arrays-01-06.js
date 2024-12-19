// Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.
//
//     Note: no empty arrays will be given.
//
//     Examples
//     [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
//     [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
//     [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3

/*function highestRank(arr) {
    const frequencyMap = {};

    // Подсчет частоты каждого числа
    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        frequencyMap[num] = (frequencyMap[num] || 0) + 1;
    }

    let maxFrequency = 0;
    let mostFrequentNum = -Infinity;

    // Поиск самого частого числа
    for (const num in frequencyMap) {
        const frequency = frequencyMap[num];
        // Если частота больше, или частота равна, но число больше
        if (frequency > maxFrequency || (frequency === maxFrequency && num > mostFrequentNum)) {
            maxFrequency = frequency;
            mostFrequentNum = Number(num);
        }
    }

    return mostFrequentNum;
}

console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12]))*/

// Highest Scoring Word https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/train/javascript

/*function high(x) {
    function calculateWordScore(word) {
        let score = 0;
        for (let i = 0; i < word.length; i++) {
            score += word.charCodeAt(i) - 96;
        }
        return score;
    }

    const words = x.split(" ");
    let highestScore = 0;
    let highestScoringWord = "";

    for (const word of words) {
        const score = calculateWordScore(word);
        if (score > highestScore) {
            highestScore = score;
            highestScoringWord = word;
        }
    }

    return highestScoringWord;
}

console.log(high("man i need a taxi up to ubud"))*/

// Is a number prime? https://www.codewars.com/kata/5262119038c0985a5b00029f/train/javascript
/*
function isPrime(num) {
    if (num < 2) {
        return false
    }
    if (num === 2) {
        return true
    }
    if (num % 2 === 0) {
        return false;
    }
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(isPrime(4))*/

// Equal Sides Of An Array https://www.codewars.com/kata/5679aa472b8f57fb8c000047/train/javascript
/*
function findEvenIndex(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr.slice(0, i).reduce((a, b) => {
            return a + b
        },0) === arr.slice(i + 1).reduce((a, b) => {
            return a + b
        },0)) {
            return i
        }
    }
    return -1
}

console.log(findEvenIndex([20,10,30,10,10,15,35]))*/


// Valid Braces https://www.codewars.com/kata/5277c8a221e209d3f6000b56/train/javascript

// function validBraces(braces){
//     const stack = [];
//     const brackets = {
//         '(': ')',
//         '{': '}',
//         '[': ']'
//     };
//     for (let char of braces) {
//         if (brackets[char]) {
//             // Если это открывающая скобка, добавляем её в стек
//             stack.push(char);
//         } else if (Object.values(brackets).includes(char)) {
//             // Если это закрывающая скобка, проверяем стек
//             if (stack.length === 0 || brackets[stack.pop()] !== char) {
//                 return false; // Неправильная последовательность
//             }
//         }
//     }
//     // Если стек пуст, скобки сбалансированы
//     return stack.length === 0;
// }
//
// console.log(validBraces("(({{[[]]}}))"))

// Mexican Wave https://www.codewars.com/kata/58f5c63f1e26ecda7e000029/train/javascript

// function wave(str){
//     // Code here
//     let res = []
//     for(let i = 0; i < str.length; i++){
//         if (str[i] !== ' ') {
//             let waveStr = str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1);
//             res.push(waveStr);
//         }
//     }
// return res
// }
//
// console.log(wave("Two words"))

// Two Sum https://www.codewars.com/kata/52c31f8e6605bcc646000082/train/javascript

// function twoSum(numbers, target) {
//     let res = []
//     for (let i = 0; i < numbers.length; i++) {
//         for (let j = i + 1; j < numbers.length; j++) {
//             if (numbers[i] + numbers[j] === target) {
//                 res.push(i,j);
//             }
//         }
//     }
//     return res;
// }
//
// console.log(twoSum([1, 2, 3], 4)) // returns [0, 2] or [2, 0]

// Pyramid Array https://www.codewars.com/kata/515f51d438015969f7000013/train/javascript

// function pyramid(n) {
//     let res = []
//     if (n <= 0) {
//         return res
//     }
//     for (let i = 1; i <= n; i++) {
//         let res2 = [];
//         for (let j = 0; j < i; j++) {
//             res2.push(1);
//         }
//         res.push(res2)
//     }
//     return res
//     // your code here
// }
//
// console.log(pyramid(3)) //[[1], [1, 1], [1, 1, 1]]

// Задача: Переворот массива
// Напишите рекурсивную функцию, которая переворачивает массив. Функция должна принимать массив и возвращать новый массив, в котором элементы расположены в обратном порядке.
//
//     Условия задачи:
//     Функция должна принимать один аргумент — массив.
//     Если массив пустой, функция должна вернуть пустой массив.
//     В противном случае, функция должна вернуть новый массив, в котором первый элемент исходного массива становится последним, второй элемент — предпоследним и так далее.
//     Пример использования:
//     javascript
//
// Копировать код
// console.log(reverseArray([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]
// console.log(reverseArray(['a', 'b', 'c'])); // ['c', 'b', 'a']
// console.log(reverseArray([])); // []
// Попробуйте реализовать эту задачу!

/*
function reverseArray(arr) {
    if (arr.length === 0) {
        return []
    }
    return [arr.pop()].concat(reverseArray(arr))
}

let c = reverseArray([1, 2, 3, 4, 5])
console.log(c)*/

/*

Given an array of integers of any length, return an array that has 1 added to the value represented by the array.

    If the array is invalid (empty, or contains negative integers or integers with more than 1 digit), return nil (or your language's equivalent).

Examples
Valid arrays

    [4, 3, 2, 5] would return [4, 3, 2, 6] (4325 + 1 = 4326)
    [1, 2, 3, 9] would return [1, 2, 4, 0] (1239 + 1 = 1240)
    [9, 9, 9, 9] would return [1, 0, 0, 0, 0] (9999 + 1 = 10000)
    [0, 1, 3, 7] would return [0, 1, 3, 8] (0137 + 1 = 0138)
Invalid arrays

    [] is invalid because it is empty
    [1, -9] is invalid because -9 is not a non-negative integer
    [1, 2, 33] is invalid because 33 is not a single-digit integer  https://www.codewars.com/kata/5514e5b77e6b2f38e0000ca9/train/javascript*/


/*
function upArray(arr) {
    if (arr.length === 0) {
        return 0
    }
    const minus = arr.some(num => num < 0 || num > 9);
    if (!minus) {
        for (let i = arr.length - 1; i >= 0; i--) {
            if (arr[i] < 9) {
                arr[i] += 1;
                return arr;
            }
            arr[i] = 0;
        }

        return [1, ...arr];
    }

    return 0
}

console.log(upArray([0, 8]))*/

// Array Helpers https://www.codewars.com/kata/525d50d2037b7acd6e000534

/*
Array.prototype.square = function() {
    return this.map(x => x * x);
};

Array.prototype.cube = function() {
    return this.map(x => x * x * x);
};

Array.prototype.average = function() {
    if (this.length === 0) return NaN;
    const sum = this.reduce((acc, val) => acc + val, 0);
    return sum / this.length;
};

Array.prototype.sum = function() {
    return this.reduce((acc, val) => acc + val, 0);
};

Array.prototype.even = function() {
    return this.filter(x => x % 2 === 0);
};

Array.prototype.odd = function() {
    return this.filter(x => x % 2 !== 0);
};*/


// function whoIsPaying(name){
//     //your code here
//     return name.length > 2 ? [name, name.slice(0, 2)] : [name]
// }
//
// console.log(whoIsPaying("Me"))

// let n = 10
// next:
//     for (let i = 2; i <= n; i++) {
//     for (let j = 2; j < i; j++) {
//         if (i % j === 0) continue next;
//     }
//     console.log(i)
// }

// Snail Sort https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1/train/javascript


// function snail(array) {
//     let res = [];
//     if (array.length === 0) return res;
//
//     let top = 0;
//     let bottom = array.length - 1;
//     let left = 0;
//     let right = array[0].length - 1;
//
//     while (top <= bottom && left <= right) {
//         for (let i = left; i <= right; i++) {
//             res.push(array[top][i]);
//         }
//         top++;
//
//         for (let i = top; i <= bottom; i++) {
//             res.push(array[i][right]);
//         }
//         right--;
//
//         if (top <= bottom) {
//             for (let i = right; i >= left; i--) {
//                 res.push(array[bottom][i]);
//             }
//             bottom--;
//         }
//
//         if (left <= right) {
//             for (let i = bottom; i >= top; i--) {
//                 res.push(array[i][left]);
//             }
//             left++;
//         }
//     }
//
//     return res;
// }

// const snail = function(array) {
//     const list = [];
//
//     while(array.length) {
//         list.push(...array.shift(), ...array.map(row => row.pop()));
//
//         array.reverse().map(row => row.reverse());
//     }
//
//     return list;
// }
// console.log(snail)([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]) //[1,2,3,6,9,8,7,4,5]


// Delete occurrences of an element if it occurs more than n times https://www.codewars.com/kata/554ca54ffa7d91b236000023/train/javascript

// function deleteNth(arr, n) {
//     let res = []
//     for (let i = 0; i < arr.length; i++) {
//         let res2 = res.filter(e => e === arr[i])
//         if (res2.length < n) {
//             res.push(arr[i])
//         }
//     }
//     return res
// }
//
// console.log(deleteNth([20, 37, 20, 21], 1))


// Tribonacci Sequence https://www.codewars.com/kata/556deca17c58da83c00002db/train/javascript

// function tribonacci(signature, n) {
//     if (n === 0) return []
//     let res = []
//     for (let i = 0; i < n; i++) {
//         if (!signature[i]) {
//             res.push(res[i - 3] + res[i - 2] + res[i - 1]);
//         } else {
//             res.push(signature[i])
//         }
//     }
//     return res
// }
//
// console.log(tribonacci([1, 1, 1], 10))


// Consecutive strings https://www.codewars.com/kata/56a5d994ac971f1ac500003e/train/javascript

// function longestConsec(strarr, k) {
//     if (k <= 0 || k >= strarr.length) return ""
//     let res = []
//
//     for (let i = 0; i < strarr.length; i++) {
//         let string = [...strarr].splice(i, k).reduce((a, b) => a + b)
//         res.push(string)
//     }
//     let res2 = Math.max(...res.map(e => e.length))
//     let res3 = res.filter(e => e.length === res2)
//     return res3[0]
// }
//
// console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2))

// Find the missing term in an Arithmetic Progression https://www.codewars.com/kata/52de553ebb55d1fca3000371/train/javascript

var findMissing = function (list) {

    let num = (list[list.length - 1] - list[0]) / list.length;
    for (let i = 0; i < list.length - 1; i++) {
        if (list[i + 1] - list[i] !== num) {
            return list[i] + num;
        }
    }
}

console.log(findMissing([1,2,3,5]))