//------------08 kyu----------
// дубликаты массива
/*
Define a function that removes duplicates from an array of non negative numbers and returns it as a result.

    The order of the sequence has to stay the same.*/

// function distinct(a) {
//     // a.filter((value, index, a)=>{a.indexOf(value) === index};
//     return [...new Set(a)];
// }
//
// console.log(distinct([1, 1, 2, 3, 4, 4, 4, 4, 5, 5, 5, 1, 1, 1, 1]));


// Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
//
// function multipleOfIndex(array) {
//     return array.filter((e, index) => {
//         return index === 0 ? e === 0 : e % index === 0
//     })
// }
//
// console.log(multipleOfIndex([0, 2, 3, 6, 9]))


/*
If you've completed this kata already and want a bigger challenge, here's the 3D version

Bob is bored during his physics lessons so he's built himself a toy box to help pass the time. The box is special because it has the ability to change gravity.

There are some columns of toy cubes in the box arranged in a line. The i-th column contains a_i cubes. At first, the gravity in the box is pulling the cubes downwards. When Bob switches the gravity, it begins to pull all the cubes to a certain side of the box, d, which can be either 'L' or 'R' (left or right). Below is an example of what a box of cubes might look like before and after switching gravity.

+---+                                       +---+
|   |                                       |   |
+---+                                       +---+
    +---++---+     +---+              +---++---++---+
|   ||   |     |   |   -->        |   ||   ||   |
+---++---+     +---+              +---++---++---+
    +---++---++---++---+         +---++---++---++---+
|   ||   ||   ||   |         |   ||   ||   ||   |
+---++---++---++---+         +---++---++---++---+
    Given the initial configuration of the cubes in the box, find out how many cubes are in each of the n columns after Bob switches the gravity.

Examples (input -> output:
* 'R', [3, 2, 1, 2]      ->  [1, 2, 2, 3]
* 'L', [1, 4, 5, 3, 5 ]  ->  [5, 5, 4, 3, 1]*/

// const flip = (d, a) => {
//     return d === "R" ? a.sort((a, b) => a - b) : a.sort((a, b) => a - b).reverse()
// }
//
// console.log(flip("L", [3, 2, 1, 2]))

/*
SpeedCode #2 - Array Madness  https://www.codewars.com/kata/56ff6a70e1a63ccdfa0001b1*/
// function arrayMadness(a, b) {
//     // Ready, get set, GO!!!
//     let arrayA = a.map(a => a ** 2).reduce((acc, current) => acc + current)
//     let arrayB = b.map(b => b ** 3).reduce((acc, current) => acc + current)
//
//     return arrayA > arrayB
//
// }
//
// console.log(arrayMadness([4, 5, 6], [1, 2, 3]))

// Sum of differences in array https://www.codewars.com/kata/5b73fe9fb3d9776fbf00009e/train/javascript

// function sumOfDifferences(arr) {
//     const sortedArr = arr.sort((a, b) => b - a);
//     let sum = 0;
//     for (let i = 0; i < sortedArr.length - 1; i++) {
//         sum += sortedArr[i] - sortedArr[i + 1];
//     }
//     return sum;
// }
//
// console.log(sumOfDifferences([1, 2, 10]))

// Printing Array elements with Comma delimiters https://www.codewars.com/kata/56e2f59fb2ed128081001328/train/javascript

// function printArray(array) {
//     //show me the code!
//     return array.join(",")
// }
//
// console.log(printArray(["h", "o", "l", "a"]))

// Enumerable Magic #25 - Take the First N Elements https://www.codewars.com/kata/545afd0761aa4c3055001386/train/javascript
// function take(arr, n) {
//     // Your code here
//     return arr.slice(0, n)
// }
//
// console.log(take([0, 1, 2, 3, 5, 8, 13], 3))

// Enumerable Magic - Does My List Include This? https://www.codewars.com/kata/545991b4cbae2a5fda000158/train/javascript

// function include(arr, item) {
//     return arr.includes(item)
// }
//
// console.log(include([1, 2, 3, 4], 3))

// How many stairs will Suzuki climb in 20 years? https://www.codewars.com/kata/56fc55cd1f5a93d68a001d4e/train/javascript
// function stairsIn20(s) {
//     //your code here
//     return s.map(e => e.reduce((a, b) => a + b, 0)).reduce((a, b) => a + b, 0) * 20
// }
//
// let a = [
//     [
//         6737, 7244, 5776, 9826, 7057, 9247, 5842,
//         5484, 6543, 5153, 6832, 8274, 7148, 6152,
//         5940, 8040, 9174, 7555, 7682, 5252, 8793,
//         8837, 7320, 8478, 6063, 5751, 9716, 5085,
//         7315, 7859, 6628, 5425, 6331, 7097, 6249,
//         8381, 5936, 8496, 6934, 8347, 7036, 6421,
//         6510, 5821, 8602, 5312, 7836, 8032, 9871,
//         5990, 6309, 7825
//     ],
//     [
//         9175, 7883, 7596, 8635, 9274, 9675, 5603,
//         6863, 6442, 9500, 7468, 9719, 6648, 8180,
//         7944, 5190, 6209, 7175, 5984, 9737, 5548,
//         6803, 9254, 5932, 7360, 9221, 5702, 5252,
//         7041, 7287, 5185, 9139, 7187, 8855, 9310,
//         9105, 9769, 9679, 7842, 7466, 7321, 6785,
//         8770, 8108, 7985, 5186, 9021, 9098, 6099,
//         5828, 7217, 9387
//     ],
//     [
//         8646, 6945, 6364, 9563, 5627, 5068, 9157,
//         9439, 5681, 8674, 6379, 8292, 7552, 5370,
//         7579, 9851, 8520, 5881, 7138, 7890, 6016,
//         5630, 5985, 9758, 8415, 7313, 7761, 9853,
//         7937, 9268, 7888, 6589, 9366, 9867, 5093,
//         6684, 8793, 8116, 8493, 5265, 5815, 7191,
//         9515, 7825, 9508, 6878, 7180, 8756, 5717,
//         7555, 9447, 7703
//     ],
//     [
//         6353, 9605, 5464, 9752, 9915, 7446, 9419,
//         6520, 7438, 6512, 7102, 5047, 6601, 8303,
//         9118, 5093, 8463, 7116, 7378, 9738, 9998,
//         7125, 6445, 6031, 8710, 5182, 9142, 9415,
//         9710, 7342, 9425, 7927, 9030, 7742, 8394,
//         9652, 5783, 7698, 9492, 6973, 6531, 7698,
//         8994, 8058, 6406, 5738, 7500, 8357, 7378,
//         9598, 5405, 9493
//     ],
//     [
//         6149, 6439, 9899, 5897, 8589, 7627, 6348,
//         9625, 9490, 5502, 5723, 8197, 9866, 6609,
//         6308, 7163, 9726, 7222, 7549, 6203, 5876,
//         8836, 6442, 6752, 8695, 8402, 9638, 9925,
//         5508, 8636, 5226, 9941, 8936, 5047, 6445,
//         8063, 6083, 7383, 7548, 5066, 7107, 6911,
//         9302, 5202, 7487, 5593, 8620, 8858, 5360,
//         6638, 8012, 8701
//     ],
//     [
//         5000, 5642, 9143, 7731, 8477, 8000, 7411,
//         8813, 8288, 5637, 6244, 6589, 6362, 6200,
//         6781, 8371, 7082, 5348, 8842, 9513, 5896,
//         6628, 8164, 8473, 5663, 9501, 9177, 8384,
//         8229, 8781, 9160, 6955, 9407, 7443, 8934,
//         8072, 8942, 6859, 5617, 5078, 8910, 6732,
//         9848, 8951, 9407, 6699, 9842, 7455, 8720,
//         5725, 6960, 5127
//     ],
//     [
//         5448, 8041, 6573, 8104, 6208, 5912, 7927,
//         8909, 7000, 5059, 6412, 6354, 8943, 5460,
//         9979, 5379, 8501, 6831, 7022, 7575, 5828,
//         5354, 5115, 9625, 7795, 7003, 5524, 9870,
//         6591, 8616, 5163, 6656, 8150, 8826, 6875,
//         5242, 9585, 9649, 9838, 7150, 6567, 8524,
//         7613, 7809, 5562, 7799, 7179, 5184, 7960,
//         9455, 5633, 9085
//     ]
// ]
// console.log(stairsIn20(a))

// Find the Difference in Age between Oldest and Youngest Family Members https://www.codewars.com/kata/5720a1cb65a504fdff0003e2/train/javascript
// function differenceInAges(ages) {
//     let result = []
//     let res = ages.sort((a, b) => a - b);
//     result.push(res[0]);
//     result.push(res[res.length - 1]);
//     result.push(result[1] - result[0])
//     return result
// }
//
// console.log(differenceInAges([82, 15, 6, 38, 35]))

// let websites = []
// while (websites.length < 1000) {
//     websites.push("codewars")
// }
// console.log(websites.length)


// CSV representation of array https://www.codewars.com/kata/5a34af40e1ce0eb1f5000036

// input:
//     [[ 0, 1, 2, 3, 4 ],
//         [ 10,11,12,13,14 ],
//         [ 20,21,22,23,24 ],
//         [ 30,31,32,33,34 ]]
//
// output:
//     '0,1,2,3,4\n'
//     +'10,11,12,13,14\n'
//     +'20,21,22,23,24\n'
//     +'30,31,32,33,34'

// function toCsvText(array) {
//   return array.join('\n');
// }
//
// let arr = [[0, 1, 2, 3, 4], [10, 11, 12, 13, 14], [20, 21, 22, 23, 24], [30, 31, 32, 33, 34]]
//
// console.log(toCsvText(arr))

