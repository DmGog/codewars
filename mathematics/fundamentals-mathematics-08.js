/*
For example, if a bottle costs £10 normally and the duty free discount is 10%, you would save £1 per bottle. If your holiday will cost £500, you would have to purchase 500 bottles to save £500, so the answer you return should be 500.

Another example: if a bottle costs £12 normally and the duty free discount is 50%, you would save £6 per bottle. If your holiday will cost £1000, you would have to purchase 166.66 bottles to save £1000, so your answer should be 166 bottles.

    All inputs will be integers. Please return an integer. Round down.*/

function dutyFree(normPrice, discount, hol) {
    return Math.floor(hol / ((normPrice * discount) / 100))
}

console.log(dutyFree(12, 50, 1000))