//------------08 kyu----------

/*
Create a method that takes as input a name, city, and state to welcome a person. Note that name will be an array consisting of one or more values that should be joined together with one space between each, and the length of the name array in test cases will vary.

    Example:

['John', 'Smith'], 'Phoenix', 'Arizona'
This example will return the string Hello, John Smith! Welcome to Phoenix, Arizona!*/
/*function sayHello(name, city, state) {
    return `Hello, ${name.join(" ")}! Welcome to ${city}, ${state}!`
}

console.log(sayHello(["Wallace", "Russel", "Osbourne"], "Albany", "New York"))*/


// Your goal is to return multiplication table for number that is always an integer from 1 to 10.
//
// For example, a multiplication table (string) for number == 5 looks like below:
//
//     1 * 5 = 5
// 2 * 5 = 10
// 3 * 5 = 15
// 4 * 5 = 20
// 5 * 5 = 25
// 6 * 5 = 30
// 7 * 5 = 35
// 8 * 5 = 40
// 9 * 5 = 45
// 10 * 5 = 50
// P. S. You can use \n in string to jump to the next line.
//
//     Note: newlines should be added between rows, but there should be no trailing newline at the end. If you're unsure about the format, look at the sample tests.

/*function multiTable(number) {
    let table = "";
    for (let i = 1; i <= 10; i++) {
        table += `${i} * ${number} = ${i * number}`;
        if (i < 10) {
            table += "\n";
        }
    }
    return table;

}

console.log(multiTable(5))*/

// Complete the function that receives as input a string, and produces outputs according to the following table:
//
//     Input	Output
// "Jabroni"	"Patron Tequila"
// "School Counselor"	"Anything with Alcohol"
// "Programmer"	"Hipster Craft Beer"
// "Bike Gang Member"	"Moonshine"
// "Politician"	"Your tax dollars"
// "Rapper"	"Cristal"
// anything else	"Beer"
// Note: anything else is the default case: if the input to the function is not any of the values in the table, then the return value should be "Beer".
//
//     Make sure you cover the cases where certain words do not show up with correct capitalization. For example, the input "pOLitiCIaN" should still return "Your tax dollars".

/*function getDrinkByProfession(param) {
    const table = {
        "jabroni": "Patron Tequila",
        "school counselor": "Anything with Alcohol",
        "programmer": "Hipster Craft Beer",
        "bike gang member": "Moonshine",
        "politician": "Your tax dollars",
        "rapper": "Cristal",
    }
    return table[param.toLowerCase()] ? table[param.toLowerCase()] : "Beer"
}

console.log(getDrinkByProfession("prsmmer"))*/

// Given a string of arbitrary length with any ascii characters. Write a function to determine whether the string contains the whole word "English".
//
//     The order of characters is important -- a string "abcEnglishdef" is correct but "abcnEglishsef" is not correct.
//
//     Upper or lower case letter does not matter -- "eNglisH" is also correct.
//
//     Return value as boolean values, true for the string to contains "English", false for it does not.

/*function spEng(sentence) {
    const lowerStr = sentence.toLowerCase();
    return lowerStr.includes("english");
}*/

// Triple Trouble https://www.codewars.com/kata/5704aea738428f4d30000914/train/javascript

/*function tripleTrouble(one, two, three) {
    //Solution
    let res = ""
    for (let i = 0; i < one.length; i++) {
        res += one[i] + two[i] + three[i]
    }
    return res
}

console.log(tripleTrouble("aaa", "bbb", "ccc"))*/

// No Loops 2 - You only need one https://www.codewars.com/kata/57cc40b2f8392dbf2a0003ce/train/javascript
/*function check(a, x) {

    return a.find((e) => e === x) === x
};

console.log(check(["what", "a", "great", "kata"], "kat"))*/

// Which are in? https://www.codewars.com/kata/550554fd08b86f84fe000a58/train/javascript


// const a1 = ["live", "strong", "lyal", "lysh", "arp"]
//
// const a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
//
// function inArray(array1, array2) {
//     let res = new Set()
//     for (let i = 0; i < array1.length; i++) {
//         for (let j = 0; j < array2.length; j++) {
//             if (array2[j].includes(array1[i])) {
//                 res.add(array1[i])
//             }
//         }
//     }
//     return Array.from(res).sort()
// }
//
// console.log(inArray(a1, a2))

// googlePosition  https://www.codewars.com/kata/52efefcbcdf57161d4000091/train/javascript


// function count(string) {
//     let res = {}
//     if(string==="") return res
//     for (let i = 0; i < string.length; i++) {
//         res[string.charAt(i)] = string.split('').filter(char => char === string.charAt(i)).length;
//     }
//     return res;
// }
//
// console.log(count('aba')) /* {'a': 2, 'b': 1}*/

// CamelCase Method https://www.codewars.com/kata/587731fda577b3d1b0001196/train/javascript

// String.prototype.camelCase=function(){
//     return this.split(' ').map(e=>e.charAt(0).toUpperCase() + e.slice(1).toLowerCase()).join("")
// }
//
// console.log(metod("camel Case method"))

// Reverse every other word in the string https://www.codewars.com/kata/58d76854024c72c3e20000de/train/javascript

/*function reverse(str) {
    return str.trim().split(" ").map((e, i) => i % 2 === 0 ? e : e.split("").reverse().join("")).join(" ");
}

console.log(reverse("Reverse this string, please!"))*/

// WeIrD StRiNg CaSe https://www.codewars.com/kata/52b757663a95b11b3d00062d/train/javascript

/*function toWeirdCase(string) {
    return string.trim().split(" ").map((e) => e.split("").map((el, i) => i % 2 === 0 ? el.toUpperCase() : el.toLowerCase()).join("")).join(" ")
}

console.log(toWeirdCase("UPPER CASE")) //UpPeR CaSe*/

// Title Case  https://www.codewars.com/kata/5202ef17a402dd033c000009/train/javascript
/*
function titleCase(title, minorWords) {
    let res1 = title.toLowerCase().split(" ");
    let res2 = minorWords ? minorWords.toLowerCase().split(" ") : [];

    for (let i = 0; i < res1.length; i++) {
        if (i === 0 || !res2.includes(res1[i])) {
            res1[i] = res1[i].charAt(0).toUpperCase() + res1[i].slice(1);
        }
    }
    return res1.join(" ");
}

console.log(titleCase("a clash of KINGS", "a an the of")) //'A Clash of Kings'*/


/*
function defineSuit(card) {
    // good luck
    let res = card.split("")
    switch (res[res.length-1]) {
        case "♣":
            return "clubs"
        case "♦":
            return "diamonds"
        case "♥":
            return "hearts"
        case "♠":
            return "spades"
    }
}

console.log(defineSuit("10♥"))*/


// Consonant value https://www.codewars.com/kata/59c633e7dcc4053512000073/train/javascript


/*
function solve(s) {
    let maxSum = 0;
    let currentSum = 0;

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        const position = char.charCodeAt(0) - 'a'.charCodeAt(0) + 1;

        // Проверяем, является ли символ согласной
        if (!'aeiou'.includes(char)) {
            currentSum += position; // Добавляем значение согласной к текущей сумме
        } else {
            // Если символ гласный, сравниваем и сбрасываем текущую сумму
            maxSum = Math.max(maxSum, currentSum);
            currentSum = 0; // Сбрасываем текущую сумму
        }
    }

    // Сравниваем в конце, если строка заканчивается на согласную
    maxSum = Math.max(maxSum, currentSum);

    return maxSum;
};

console.log(solve("zodiac"))*/

// Is there a vowel in there?  https://www.codewars.com/kata/57cff961eca260b71900008f/train/javascript

/*
function isVow(a) {
    let c = "aeiou"
    let res2 = a.map(e => {
        // Преобразуем число в символ
        let char = String.fromCharCode(e);
        // Проверяем, является ли символ гласной
        return c.includes(char) ? char : e; // Если гласная, возвращаем её, иначе возвращаем число
    });
    return res2;

}

console.log(isVow([118, 117, 120, 121, 117, 98, 122, 97, 120, 106, 104, 116, 113, 114, 113, 120, 106]))*/

// Contamination #1 -String- https://www.codewars.com/kata/596fba44963025c878000039/train/javascript

/*
function contamination(text, char) {
    const res = []
    for (let i = 0; i < text.length; i++) {
        res.push(char)
    }
    return res.join("")
}

console.log(contamination("_3ebzgh4","&"))*/


// USD => CNY https://www.codewars.com/kata/5977618080ef220766000022/train/javascript

/*
    function usdcny(usd) {
        return `${(usd*6.75).toFixed(2)} Chinese Yuan`
    }

console.log(usdcny(15))*/

/*
The input is a string str of digits. Cut the string into chunks (a chunk here is a substring of the initial string) of size sz (ignore the last chunk if its size is less than sz).

If the sum of a chunk's digits is divisible by 2, reverse that chunk; otherwise rotate it to the left by one position. Put together these modified chunks and return the result as a string.

If

sz is <= 0 or if str == "" return ""
sz is greater (>) than the length of str it is impossible to take a chunk of size sz hence return "".
    Examples:
("123456987654", 6) --> "234561876549"
("123456987653", 6) --> "234561356789"
("66443875", 4) --> "44668753"
("66443875", 8) --> "64438756"
("664438769", 8) --> "67834466"
("123456779", 8) --> "23456771"
("", 8) --> ""
("123456779", 0) --> ""
("563000655734469485", 4) --> "0365065073456944"
Example of a string rotated to the left by one position:
    s = "123456" gives "234561".*/

// https://www.codewars.com/kata/56b5afb4ed1f6d5fb0000991/train/javascript

/*
function revrot(str, sz) {
    if (str.length === 0 || sz <= 0) return "";

    let res = [];

    for (let i = 0; i < str.length; i += sz) {
        res.push(str.slice(i, i + sz));
    }

    let result = res.map((e) => {
        if (e.length < sz) return "";

        const sum = e.split("").reduce((a, b) => Number(a) + Number(b), 0);
        let arr = e.split("");

        if (sum % 2 === 0) {
            return arr.reverse().join("");
        } else {
            const firstElement = arr.splice(0, 1)[0];
            arr.push(firstElement);
            return arr.join("");
        }
    });

    return result.join("");
}

console.log(revrot("123456987654", 6))*/

/*
function print(n) {
    let step = 0
    while (step <= n) {
        console.log("#".repeat(step))
        step++
    }
}

print(7)
*/


// First non-repeating character https://www.codewars.com/kata/52bc74d4ac05d0945d00054e/train/javascript

// function firstNonRepeatingLetter(s) {
//
//     let arr = s.split("");
//
//     for (let i = 0; i < arr.length; i++) {
//         let newArr = arr.filter(e => e.toLowerCase() === arr[i].toLowerCase());
//
//         if (newArr.length === 1) {
//
//             return arr[i];
//         }
//     }
//
//     return ''
//
// }
//
// console.log(firstNonRepeatingLetter("stress"))

/*
function firstNon(s) {
    const lowerStr = s.toLowerCase()
    const res = {}
    let pos = 0
    for (let i of lowerStr) {
        if (!res[i]) {
            res[i] = [1, pos]
            pos++
        } else {
            res[i] = [res[i][0] + 1, pos]
            pos++
        }
    }
    const resultIndex = Object.entries(res)
        .filter((el) => el[1][0] === 1)
        .sort((a, b) => a[1][1] - b[1][1])
    return s[resultIndex[0][1][1]]
}

console.log(firstNon(""))*/

// Good vs Evil https://www.codewars.com/kata/52761ee4cffbc69732000738/train/javascript

/*Hobbits: 1
Men: 2
Elves: 3
Dwarves: 3
Eagles: 4
Wizards: 10*/

/*Orcs: 1
Men: 2
Wargs: 2
Goblins: 2
Uruk Hai: 3
Trolls: 5
Wizards: 10*/

// function goodVsEvil(good, evil) {
//     const goodObj = {
//         Hobbits: 1,
//         Men: 2,
//         Elves: 3,
//         Dwarves: 3,
//         Eagles: 4,
//         Wizards: 10,
//     }
//
//     const evilObj = {
//         Orcs: 1,
//         Men: 2,
//         Wargs: 2,
//         Goblins: 2,
//         UrukHai: 3,
//         Trolls: 5,
//         Wizards: 10,
//     }
//     let goodArr = good.split(" ")
//     let evilArr = evil.split(" ")
//     let i = 0
//     let j = 0
//     let sumGood = 0
//     let sumEvil = 0
//     for (let key in goodObj) {
//             sumGood += goodObj[key] * goodArr[i]
//             i++
//     }
//     for (let key in evilObj) {
//             sumEvil += evilObj[key] * evilArr[j]
//             j++
//     }
//
//     if (sumGood > sumEvil) {
//         return "Battle Result: Good triumphs over Evil"
//     }
//     if (sumGood < sumEvil) {
//         return "Battle Result: Evil eradicates all trace of Good"
//     }
//     if (sumGood === sumEvil) {
//         return "Battle Result: No victor on this battle field"
//     }
// }
//
//
// console.log(goodVsEvil("1 1 1 1 1 1", "1 1 1 1 1 1 1"))


// Backspaces in string https://www.codewars.com/kata/5727bb0fe81185ae62000ae3/train/javascript
// function cleanString(s) {
//     let res = []
//     for (let el of s) {
//         if (el === "#") {
//             res.pop()
//         } else {
//             res.push(el)
//         }
//     }
//     return res.join("")
// }
//
// console.log(cleanString("abc#d##c"))