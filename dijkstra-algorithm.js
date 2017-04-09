/**
 * Алгоритм Дейсктры (см dijkstra.jpg для примера графа)
 */
function dijkstra() {

}

/**
 * Массив для отслеживания обработанных узлов
 * @type {Array}
 */
let processed = [];

/**
 * Описание структуры графа
 * @type {{start: {a: number, b: number}, end: null, a: {end: number}, b: {a: number, end: number}}}
 */
let graph = {
    start: {
        a: 6,
        b: 2
    },
    end: null,
    a: {
        end: 1
    },
    b: {
        a: 3,
        end: 5
    }
};

/**
 * Описание стоимостей графа
 * @type {{a: number, b: number, end: null}}
 */
let costs = {
    a: 6,
    b: 2,
    end: Infinity
};

/**
 * Описание родителей всех узлов графа
 * @type {{a: string, b: string, end: null}}
 */
let parents = {
    a: 'start',
    b: 'start',
    end: null
};
