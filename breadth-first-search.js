/**
 * Поиск в ширину
 */

// Описание структуры графа
let graph = {};
graph['you'] = ['alice', 'bob', 'claire'];
graph['bob'] = ['anuj', 'peggy'];
graph['alice'] = ['peggy'];
graph['claire'] = ['thom', 'jonny'];
graph['anuj'] = [];
graph['peggy'] = [];
graph['thom'] = [];
graph['jonny'] = [];

// Описание стурктуры очереди
function Queue() {
    this.elements = [];

    this.add = element => {
        this.elements.push(...element);
    };

    this.get = () => {
        return this.elements.shift();
    };

    this.add = this.add.bind(this);
    this.get = this.get.bind(this);
}

// Создание очереди
let searchQueue = new Queue();
// Определение начала поиска
searchQueue.add(['you']);

function breadthFirstSearch() {
    const currentItem = searchQueue.get();
    console.log('currentItem', currentItem);

    if (!currentItem) {
        console.log('success: false');
        return {
            success: false
        }
    }

    if (isSearchedElement(currentItem)) {
        console.log('success: true', currentItem);
        return {
            success: true,
            item: currentItem
        };
    } else {
        console.log('next iteration', graph[currentItem]);
        searchQueue.add(graph[currentItem]);
        breadthFirstSearch();
    }
}

function isSearchedElement(name) {
    return name.startsWith('t');
}
