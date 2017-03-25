/**
 * Сортировка выбором
 * Сложность O(n^2)
 * @param array
 * @return {Array}
 */
function selectionSort(array = []) {
    let arraySorted = [];
    const arrayLength = array.length;

    for (let i = 0; i < arrayLength; i++) {
        let minIndex = findMin(array);
        let minValue = array[minIndex];
        console.log('---');
        console.log('array', array);
        console.log('minValue', minValue);
        arraySorted.push(minValue);
        array.splice(minIndex, 1);
    }

    return arraySorted;
}

function findMin(array = []) {
    let minIndex = 0;
    let minValue = array[minIndex];
    const arrayLength = array.length;

    for (let i = 1; i < arrayLength; i++) {
        if (array[i] < minValue) {
            minIndex = i;
            minValue = array[i];
        }
    }
    return minIndex;
}
