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

function reverseArray(arr) {
    if (arr.length === 0) {
        return []
    }
    return [arr.pop()].concat(reverseArray(arr))
}

let c = reverseArray([1, 2, 3, 4, 5])
console.log(c)