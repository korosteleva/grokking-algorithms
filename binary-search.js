/**
 * Бинарный поиск
 * Сложность алгоритма O(log n)
 * @param array
 * @param element
 * @return {{index: number, iterations: number}}
 */
function binarySearch(array = [], element) {
    let low = 0;
    let high = array.length - 1;
    let iterations = 0;

    while (low <= high) {
        let middle = Math.floor((high + low) / 2);
        let guess = array[middle];
        iterations++;

        console.log('---');
        console.log('iteration', iterations);
        console.log('low', low);
        console.log('high', high);
        console.log('mid', middle);

        if (element === guess) {
            return {
                index: middle,
                iterations
            };
        }

        if (element < guess) {
            high = middle - 1;
        } else {
            low = middle + 1;
        }
    }

    return {
        index: -1,
        iterations
    };
}
