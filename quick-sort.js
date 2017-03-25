/**
 * Алгоритм быстрой сорировки
 * Выбирается опорный элемент, формируются два массива: элементы, которые меньше опорного и которые больше
 * Применяем рекурсивно алгоритм к получившимся массива
 * На выходе склеиваем массив с меньшими значениями, опорный элемент и массив в большими значениями
 *
 * Сложность алгоритма записит от выбра опорного элемента
 * В худшем случае: O(n^2)
 * В среднем случае: O(n log n)
 * @param array
 * @return {*}
 */
function quickSort(array = []) {
    const arrayLength = array.length;
    if (arrayLength < 2) {
        return array;
    }
    const mainElement = array[0];
    let lessThenMain = [];
    let greaterThenMain = [];

    for (let i = 1; i < arrayLength; i++) {
        if (array[i] <= mainElement) {
            lessThenMain.push(array[i]);
        } else {
            greaterThenMain.push(array[i]);
        }
    }

    return [...quickSort(lessThenMain), mainElement, ...quickSort(greaterThenMain)];
}