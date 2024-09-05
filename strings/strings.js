//------------08 kyu----------

/*
Create a method that takes as input a name, city, and state to welcome a person. Note that name will be an array consisting of one or more values that should be joined together with one space between each, and the length of the name array in test cases will vary.

    Example:

['John', 'Smith'], 'Phoenix', 'Arizona'
This example will return the string Hello, John Smith! Welcome to Phoenix, Arizona!*/
function sayHello(name, city, state) {
    return `Hello, ${name.join(" ")}! Welcome to ${city}, ${state}!`
}

console.log(sayHello(["Wallace", "Russel", "Osbourne"], "Albany", "New York"))


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

function multiTable(number) {
    let table = "";
    for (let i = 1; i <= 10; i++) {
        table += `${i} * ${number} = ${i * number}`;
        if (i < 10) {
            table += "\n";
        }
    }
    return table;

}

console.log(multiTable(5))

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

function getDrinkByProfession(param) {
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

console.log(getDrinkByProfession("prsmmer"))

// Given a string of arbitrary length with any ascii characters. Write a function to determine whether the string contains the whole word "English".
//
//     The order of characters is important -- a string "abcEnglishdef" is correct but "abcnEglishsef" is not correct.
//
//     Upper or lower case letter does not matter -- "eNglisH" is also correct.
//
//     Return value as boolean values, true for the string to contains "English", false for it does not.

function spEng(sentence) {
    const lowerStr = sentence.toLowerCase();
    return lowerStr.includes("english");
}