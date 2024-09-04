/*
For example, if a bottle costs £10 normally and the duty free discount is 10%, you would save £1 per bottle. If your holiday will cost £500, you would have to purchase 500 bottles to save £500, so the answer you return should be 500.

Another example: if a bottle costs £12 normally and the duty free discount is 50%, you would save £6 per bottle. If your holiday will cost £1000, you would have to purchase 166.66 bottles to save £1000, so your answer should be 166 bottles.

    All inputs will be integers. Please return an integer. Round down.*/

function dutyFree(normPrice, discount, hol) {
    return Math.floor(hol / ((normPrice * discount) / 100))
}

console.log(dutyFree(12, 50, 1000))

/*
Find out whether the shape is a cube https://www.codewars.com/kata/58d248c7012397a81800005c*/

function cubeChecker(volume, side) {
    return side > 0 ? side ** 3 === volume : false
}

console.log(cubeChecker(-8, -2))

/*
How old will I be in 2099? https://www.codewars.com/kata/5761a717780f8950ce001473/train/javascript*/

function calculateAge(yearOfBirth, yearToCheck) {
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

console.log(calculateAge(2011, 2012))

// Take the Derivative https://www.codewars.com/kata/5963c18ecb97be020b0000a2/train/javascript

function derive(coefficient, exponent) {
    if (exponent !== 1) {
        return `${coefficient * exponent}x^${exponent - 1}`
    } else {
        return `${coefficient * exponent}x^${exponent}`
    }
}

console.log(derive(7, 8))


// Is this a triangle? https://www.codewars.com/kata/56606694ec01347ce800001b/train/javascript

function isTriangle(a, b, c) {
    return (a + b > c) && (a + c > b) && (b + c > a)
}

console.log(isTriangle(1, 2, 3))


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

function animal(obj) {

    return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`
}

console.log(animal({name: "dog", legs: 4, color: "white"}))

function formatMoney(amount) {
    // your formatting code here
    return `$${amount.toFixed(2)}`
}

console.log(formatMoney(39.99))

// Sum of Multiples https://www.codewars.com/kata/57241e0f440cd279b5000829/train/javascript

function sumMul(n, m) {
    if (m <= n) {
        return "INVALID"
    }
    let res = 0
    for (let i = n; i < m; i = i + n) {
        res += i
    }
    return res
}

console.log(sumMul(2, 9))

// 5 without numbers !!https://www.codewars.com/kata/59441520102eaa25260000bf/train/javascript
function unusualFive() {
    let res = "apple"
    return res.length
}

console.log(unusualFive())