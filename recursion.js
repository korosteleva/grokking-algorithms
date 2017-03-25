function factorial(n) {
    return n === 1 ? n : n * factorial(n - 1);
}

function arraySum(array = []) {
    console.log('---');
    console.log('array', array);
    if (!array.length) {
        return 0;
    }
    const element = array.pop();
    console.log('element', element);
    return element + arraySum(array);
}

function arrayElementsCount(array = []) {
    console.log('---');
    console.log('array', array);
    if (!array.length) {
        return 0;
    }
    array.pop();
    return 1 + arrayElementsCount(array);
}

function findMaxElement(array = []) {
    console.log('---');
    console.log('array', array);
    const arrayLength = array.length;
    if (arrayLength < 2) {
        console.log('array must contains 2 or more elements');
        return false;
    }
    const firstElement = array[0];
    const secondElement = array[1];
    if (array.length === 2) {
        return firstElement > secondElement ? firstElement : secondElement;
    }
    array.pop();

    return firstElement > secondElement ? firstElement : findMaxElement(array);
}
