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