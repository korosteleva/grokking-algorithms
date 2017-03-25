/**
 * Поиск наибольшего общего делителя (НОД)
 * Описание алгоритма:
 Большее число делим на меньшее.
 Если делится без остатка, то меньшее число и есть НОД (следует выйти из цикла).
 Если есть остаток, то большее число заменяем на остаток от деления.
 */

function euclideanAlgorithm(numberA = 1, numberB = 1) {
    if (numberA === 0 || numberB === 0) {
        return 0;
    }
    const maxNumber = numberA > numberB ? numberA : numberB;
    const minNumber = maxNumber === numberA ? numberB : numberA;
    const division = maxNumber % minNumber;
    if (division === 0) {
        return minNumber;
    }
    return euclideanAlgorithm(minNumber, division);
}
