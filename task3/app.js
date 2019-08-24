
function delayeOutput(str) {
    let wordsArray = str.split(' ');

    let sumSeconds = 0;

    for (let i = 0; i < wordsArray.length; i++) {
        let func = function () {
            console.log(wordsArray[i]);
        };

        let idx = Math.min(i+1, arguments.length-1);
        sumSeconds += arguments[idx];
        let delay = 1000 * sumSeconds;
        setTimeout(func, delay);
    }
}

let userStr = prompt('Введите строку: ');
let numbersStr = prompt('Введите числа (разделенные пробелом): ');

let numbers = numbersStr.split(' ');
numbers = numbers.map(numStr => parseFloat(numStr));

delayeOutput(userStr, ...numbers);
