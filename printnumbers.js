/**
 * Вывод чисел в колонках
 * @param   {Number}  max    от 0 до max
 * @param   {Number}  cols   количество колонок
 * @returns {String}
 */

const printNumbers = function (max, cols) {
    const table = [];
    const line = Math.ceil(max/cols);

    for (let i = 0; i < line; i++) {
        let rowArray = [];
        for (let j = 0; j < cols; j++) {
            let item = i + (j * line);
            if (item < max) {
                rowArray.push(item);
            }
        }
        table.push(rowArray.join(' '));
    }

    return table.join('\n');
};


console.log(printNumbers(12, 3));
/*
Пример работы:
0 4 8
1 5 9
2 6 10
3 7 11
*/
