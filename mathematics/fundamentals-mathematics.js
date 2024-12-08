/*
For example, if a bottle costs £10 normally and the duty free discount is 10%, you would save £1 per bottle. If your holiday will cost £500, you would have to purchase 500 bottles to save £500, so the answer you return should be 500.

Another example: if a bottle costs £12 normally and the duty free discount is 50%, you would save £6 per bottle. If your holiday will cost £1000, you would have to purchase 166.66 bottles to save £1000, so your answer should be 166 bottles.

    All inputs will be integers. Please return an integer. Round down.*/

/*function dutyFree(normPrice, discount, hol) {
    return Math.floor(hol / ((normPrice * discount) / 100))
}

console.log(dutyFree(12, 50, 1000))*/

/*
Find out whether the shape is a cube https://www.codewars.com/kata/58d248c7012397a81800005c*/

/*function cubeChecker(volume, side) {
    return side > 0 ? side ** 3 === volume : false
}

console.log(cubeChecker(-8, -2))*/

/*
How old will I be in 2099? https://www.codewars.com/kata/5761a717780f8950ce001473/train/javascript*/

/*function calculateAge(yearOfBirth, yearToCheck) {
    const ageDifference = yearToCheck - yearOfBirth;

    if (ageDifference < 0) {
        const yearsUntilBorn = Math.abs(ageDifference);
        return `You will be born in ${yearsUntilBorn} year${yearsUntilBorn === 1 ? "" : "s"}.`;
    } else if (ageDifference > 0) {
        return `You are ${ageDifference} year${ageDifference === 1 ? "" : "s"} old.`;
    } else {
        return `You were born this very year!`;
    }
}

console.log(calculateAge(2011, 2012))*/

// Take the Derivative https://www.codewars.com/kata/5963c18ecb97be020b0000a2/train/javascript

/*
function derive(coefficient, exponent) {
    if (exponent !== 1) {
        return `${coefficient * exponent}x^${exponent - 1}`
    } else {
        return `${coefficient * exponent}x^${exponent}`
    }
}

console.log(derive(7, 8))
*/


// Is this a triangle? https://www.codewars.com/kata/56606694ec01347ce800001b/train/javascript

/*function isTriangle(a, b, c) {
    return (a + b > c) && (a + c > b) && (b + c > a)
}

console.log(isTriangle(1, 2, 3))*/


// let obj = {
//     get a() {
//         return this._a++;
//     },
//     _a: 1,
// }
// if (obj.a === 1 && obj.a === 2 && obj.a === 3) {
//     console.log("bingo")
// }


// Training JS #5: Basic data types--Object https://www.codewars.com/kata/571f1eb77e8954a812000837/train/javascript

/*function animal(obj) {

    return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`
}

console.log(animal({name: "dog", legs: 4, color: "white"}))*/

/*
function formatMoney(amount) {
    // your formatting code here
    return `$${amount.toFixed(2)}`
}

console.log(formatMoney(39.99))
*/

// Sum of Multiples https://www.codewars.com/kata/57241e0f440cd279b5000829/train/javascript

/*function sumMul(n, m) {
    if (m <= n) {
        return "INVALID"
    }
    let res = 0
    for (let i = n; i < m; i = i + n) {
        res += i
    }
    return res
}

console.log(sumMul(2, 9))*/

// 5 without numbers !!https://www.codewars.com/kata/59441520102eaa25260000bf/train/javascript
/*
function unusualFive() {
    let res = "apple"
    return res.length
}

console.log(unusualFive())
*/


// Regular Ball Super Ball https://www.codewars.com/kata/53f0f358b9cb376eca001079/train/javascript
/*var Ball = function (ballType = "regular") {
    // your code goes here
    this.ballType = ballType
};

const ball1 = new Ball()
const ball2 = new Ball("super")
console.log(ball1)
console.log(ball2)*/

// Growth of a Population https://www.codewars.com/kata/563b662a59afc2b5120000c6/train/javascript
/*function nbYear(p0, percent, aug, p) {
    // your code
    let currentPopulation = p0;
    let years = 0;
    while (currentPopulation < p) {
        currentPopulation += Math.floor(currentPopulation * percent / 100 + aug)
        years = years + 1
    }
    return years
}

console.log(nbYear(1500, 5, 100, 5000))*/

// Exclamation marks series #11: Replace all vowel to exclamation mark in the sentence https://www.codewars.com/kata/57fb09ef2b5314a8a90001ed/train/javascript
/*function replace(s) {
    //coding and coding....
    return s.replace(/[aeiou]/gi, "!")

}

console.log(replace("Hi!"))*/

// Check same case https://www.codewars.com/kata/5dd462a573ee6d0014ce715b/train/javascript
/*function sameCase(a, b) {
    if (!isNaN(a) || !isNaN(b) || !/[a-zA-Z]/.test(a) || !/[a-zA-Z]/.test(b)) {
        return -1;
    }

    if ((a === a.toLowerCase() && b === b.toLowerCase()) ||
        (a === a.toUpperCase() && b === b.toUpperCase())) {
        return 1;
    } else {
        return 0;
    }
}*/

// Remove First and Last Character Part Two https://www.codewars.com/kata/570597e258b58f6edc00230d/train/javascript

/*function array(string) {
    if (string.split(",").length < 3) {
        return null;
    }
    return string.split(",").slice(1, -1).join(" ")
}

console.log(array("A1,B2,C3,D4,E5"))*/

// Find the Remainder https://www.codewars.com/kata/524f5125ad9c12894e00003f/train/javascript

/*function remainder(n, m) {
    // Divide the larger argument by the smaller argument and return the remainder

    return n > m ? n % m : m % n
}

console.log(remainder(13, 72))*/

// Write Number in Expanded Form https://www.codewars.com/kata/5842df8ccbd22792a4000245/train/javascript

// function expandedForm(num) {
//
//     const digits = num.toString().split('');
//     const length = digits.length;
//     const expandedParts = [];
//     for (let i = 0; i < length; i++) {
//         const currentDigit = digits[i];
//         if (currentDigit !== '0') {
//             const placeValue = currentDigit * Math.pow(10, length - i - 1);
//             expandedParts.push(placeValue);
//         }
//     }
//
//     return expandedParts.join(' + ');
// }
//
// console.log(expandedForm(70304))


// Are they the "same" ? https ://www.codewars.com/kata/550498447451fbbd7600041c/train/javascript


/*
function comp(array1, array2) {
    //your code here
    if (array1 === null || array2 === null) return false
    let array1Sort = array1.sort((a, b) => a - b).map(e => e * e)
    let array2Sort = array2.sort((a, b) => a - b)


    return JSON.stringify(array1Sort) === JSON.stringify(array2Sort)
}

console.log(comp([121, 144, 19, 161, 19, 144, 19, 11],
    [121, 14641, 20736, 361, 25921, 361, 20736, 361]))*/

/*
function pillars(numPill, dist, width) {
    // your code here
    if (numPill < 2) return 0
    if (numPill === 2) return dist * 100
    const distSm = dist * 100
    if (numPill >= 3) return distSm * (numPill - 1) + width * (numPill - 2)

}

console.log(pillars(11, 15, 30))*/

// Jack really likes his number five: the trick here is that you have to multiply each number by 5 raised to the number of digits of each numbers, so, for example: https://www.codewars.com/kata/5708f682c69b48047b000e07/train/javascript

// function multiply(number) {
//     const num = (Math.abs(number).toString()).length;
//     return number * Math.pow(5, num);
// }
//
// console.log(multiply(10))

// Calculating with Functions https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39/train/javascript

/*
function zero(b) {
    if (b) return b(0);
    return 0;
}

function one(b) {
    if (b) return b(1);
    return 1;
}

function two(b) {
    if (b) return b(2);
    return 2;
}

function three(b) {
    if (b) return b(3);
    return 3;
}

function four(b) {
    if (b) return b(4);
    return 4;
}

function five(b) {
    if (b) return b(5);
    return 5;
}

function six(b) {
    if (b) return b(6);
    return 6;
}

function seven(b) {
    if (b) return b(7);
    return 7;
}

function eight(b) {
    if (b) return b(8);
    return 8;
}

function nine(b) {
    if (b) return b(9);
    return 9;
}

function plus(a) {
    return function (b) {
        return a + b;
    };
}

function minus(a) {
    return function (b) {
        return b - a;
    }
}

function times(a) {
    return function (b) {
        return a * b;
    };
}

function dividedBy(a) {
    return function (b) {
        return Math.floor(b / a);
    };
}

console.log(seven(times(five())))
console.log(four(plus(nine())))
console.log(eight(minus(three())))
console.log(six(dividedBy(two())))
*/


/*
Your task is to write a function which returns the sum of a sequence of integers.

    The sequence is defined by 3 non-negative values: begin, end, step.

    If begin value is greater than the end, your function should return 0. If end is not the result of an integer number of steps, then don't add it to the sum. See the 4th example below.  https://www.codewars.com/kata/586f6741c66d18c22800010a/train/javascript*/


/*2,2,2 --> 2
2,6,2 --> 12 (2 + 4 + 6)
1,5,1 --> 15 (1 + 2 + 3 + 4 + 5)
1,5,3  --> 5 (1 + 4)*/

/*
const sequenceSum = (begin, end, step) => {
    // May the Force be with you
    let sum = 0;
    for (let i = begin; i <= end; i = i + step) {
        sum += i
    }
    return sum;
};

console.log(sequenceSum(2, 2, 2))*/

/*
const pattern = "+7 (XXX) - XX - XX"
const str = "1234567"

function mask(str, pattern) {
    let maskString = pattern
    for (let i = 0; i < str.length; i++) {
        maskString = maskString.replace("X", str[i])
    }
    return maskString
}

console.log(mask(str, pattern))*/


/*function delay(ms) {
   return  new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, ms)
    })
}*/
/*
const str = "Denchik"

function speedDen(str, n = 0) {

    if (n < str.length) {
        console.log(str[n]);
        setTimeout(() => {
            speedDen(str, n + 1);
        }, 1000);
    }

}

speedDen(str)*/

/*
for (let j = 1; j <= 7; j++) {
    console.log('#'.repeat(j));
}*/


// function factorial(n) {
//     if (n === 1) {
//         return 1
//     }
//     return n * factorial(n - 1)
// }
//
// console.log(factorial(5))
// add the value "codewars" to the websites array 1,000 times


// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// }
// let sum = 0
//
// for (let key in salaries){
//     sum += salaries[key]
// }
// console.log(sum)

// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
// };
//
// function multiplyNumeric(obj) {
//     for (let key in obj) {
//         if (typeof obj[key] === 'number') {
//             obj[key] *= 2;
//         }
//     }
// }
// multiplyNumeric(menu)
// console.log(menu);

// let result = "1234"
// let arrResult = Array.from(result)
// console.log(arrResult)

// let obj1 = {
//     name: "petr",
//     location: {
//         country: {
//             country: "russia",
//             city: {
//                 city: "ivanovo",
//             }
//         }
//     }
// }
//
// let obj2 = structuredClone(obj1)
// obj2.location.country.city.city = "volini"
// console.log(obj2)
// console.log(obj1.location.country.city.city)

// function Accumulator (value){
//     this.value = value
//     this.read = function (){
//         this.value += +prompt("value",0)
//     }
// }
//
// let accumulator = new Accumulator(1); // начальное значение 1
//
// accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
// accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
//
// alert(accumulator.value); // выведет сумму этих значений


// let user = {
//     name: "Вася"
// };
//
// let id = Symbol.for("id");
// let id1 = Symbol("you")
//
//
// let id3 = Symbol.for("id");
// user[id] = 1;
// user[id1] = 1;
//
// console.log(id3===id)

// function ucFirst(str){
//     return str[0].toUpperCase()+str.slice(1);
// }
//
// console.log(ucFirst("вася") == "Вася");

// function checkSpam(str) {
//     if (!str) return
//     return str.toLowerCase().includes("viagra") || str.toUpperCase().includes("XXX")
//
// }
//
// console.log(checkSpam("buy xxx now") == true)

// function extractCurrencyValue(str){
//     return +str.slice(1)
// }
//
// console.log(extractCurrencyValue('$120'))


// function camelize(str) {
//     let res = str.split("-").map((e, index) => index === 0 ? e : e[0].toUpperCase() + e.slice(1).toLowerCase()).join("");
//     console.log(res)
// }
//
// camelize("background-color")
// camelize("list-style-image")
// camelize("-webkit-transition")

// let arr = [5, 3, 8, 1];
//
// function filterRange(arr, a,b){
//     return arr.filter(e=> e>=a && e<=b);
// }
//
// let filtered = filterRange(arr, 1, 4);
// console.log(filtered)
// console.log(arr)


// let arr = [5, 3, 8, 1];
//
// function filterRangeInPlace(arr, a, b) {
//   for (let i = 0; i < arr.length; i++) {
//       let res = arr[i];
//       if(res < a || res > b) {
//           arr.splice(i, 1);
//           i--
//       }
//   }
// }
//
// console.log(filterRangeInPlace(arr, 1, 4)); // удалены числа вне диапазона 1..4
//
// console.log(arr); // [3, 1]
//
// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };
//
// let users = [ vasya, petya, masha ];
//
//
//
// let names = users.map(e => e.name);
//
// console.log( names ); // Вася, Петя, Маша


// let vasya = {name: "Вася", surname: "Пупкин", id: 1};
// let petya = {name: "Петя", surname: "Иванов", id: 2};
// let masha = {name: "Маша", surname: "Петрова", id: 3};
//
// let users = [vasya, petya, masha];
//
// let usersMapped = users.map(user => ({
//     fullName: (user.name + user.surname), id:user.id
// }))

/*
usersMapped = [
  { fullName: "Вася Пупкин", id: 1 },
  { fullName: "Петя Иванов", id: 2 },
  { fullName: "Маша Петрова", id: 3 }
]
*/

// console.log(usersMapped[0].id) // 1
// console.log(usersMapped[0].fullName) // Вася Пупкин

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };
//
// let arr = [ vasya, petya, masha ];
// function sortByAge(arr){
//     arr.sort((a,b) => a.age - b.age);
// }
// sortByAge(arr);
//
// // теперь: [vasya, masha, petya]
// console.log(arr[0].name); // Вася
// console.log(arr[1].name); // Маша
// console.log(arr[2].name); // Петя

// function unique(arr) {
//     let res = []
//     for (let item of arr) {
//         if (!res.includes(item)) {
//             res.push(item)
//         }
//     }
//     return res
// }
//
// let strings = ["кришна", "кришна", "харе", "харе",
//     "харе", "харе", "кришна", "кришна", ":-O"
// ];
//
// console.log(unique(strings)); // кришна, харе, :-O

// let users = [
//     {id: 'john', name: "John Smith", age: 20},
//     {id: 'ann', name: "Ann Smith", age: 24},
//     {id: 'pete', name: "Pete Peterson", age: 31},
// ];

// function groupById(arr){
//    return  arr.reduce((a,c)=>{
//      a[c.id] = c
//        return a
//     },{})
// }
//
// let usersById = groupById(users);
// console.log(usersById)
/*
после вызова у нас должно получиться:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/