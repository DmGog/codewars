// Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.
//
//     Note: no empty arrays will be given.
//
//     Examples
//     [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
//     [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
//     [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3

function highestRank(arr) {
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

console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12]))

// Highest Scoring Word https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/train/javascript

function high(x) {
    function calculateWordScore(word) {
        let score = 0;
        for (let i = 0; i < word.length; i++) {
            score += word.charCodeAt(i) - 96;
        }
        return score;
    }
    const words = x.split(' ');
    let highestScore = 0;
    let highestScoringWord = '';

    for (const word of words) {
        const score = calculateWordScore(word);
        if (score > highestScore) {
            highestScore = score;
            highestScoringWord = word;
        }
    }

    return highestScoringWord;
}

console.log(high("man i need a taxi up to ubud"))