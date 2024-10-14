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
