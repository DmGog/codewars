/*
var a
var b = 0
let c
let d
console.log(a)
console.log(b)
console.log(c)
console.log(d)
// console.log(e)
console.log(f)
console.log(g)

function yo(){}
let e
var f = 16
var g
*/


/*promise1 = new Promise(resolve => setTimeout(() => resolve(10), 50)),
    promise2 = new Promise(resolve => setTimeout(() => resolve(-12), 30))
const addTwoPromises = async function(promise1, promise2) {
    let promiseAll = await  Promise.all([promise1, promise2])
    return promiseAll.reduce((a,b)=> a+ b)
};

console.log(addTwoPromises(promise1,promise2))*/


/*var createCounter = function(n) {

    return function() {
        return n++
    };
};

const counter = createCounter(-2)
console.log(  counter())
console.log(  counter())
console.log(  counter())*/


/*
const data = [
    {user: "Ivan", favorite: "Chair"},
    {user: "Ivan", favorite: "Table"},
    {user: "Anna", favorite: "Sofa"},
    {user: "Ivan", favorite: "Lamp"},
    {user: "Anna", favorite: "Desk"},
];
*/


/*const newObject = (data) => {
    const obj = {}
    for (let el of data) {
        if (!obj[el.user]) {
            obj[el.user] = []
        }

        obj[el.user].push(el.favorite)

    }
    return obj
}*/

// console.log(newObject(data))


/*const newObject2 = (data) => {
    return data.reduce((acc, el) => {
        if (!acc[el.user]) {
            acc[el.user] = [];
        }
        acc[el.user].push(el.favorite);
        return acc;
    }, {});
}*/

// console.log(newObject2(data))


/*const newObject3 = (data) => {

    const newObj ={}
    for (let i = 0; i < data.length; i++) {
        const user = data[i].user;
        const favorite = data[i].favorite;

        if (!newObj[user]) {
            newObj[user] = [];
        }
        newObj[user].push(favorite);
}
return newObj
}

console.log(newObject3(data))*/
// // result example:
// // {
// //   Ivan: ['Chair', 'Table', 'Lamp'],
// //   Anna: ['Sofa', 'Desk']
// // }


/*
Напишите функцию groupByCategory(products), которая вернёт объект, где ключами будут категории, а значениями массивы товаров в этих категориях.
{
    Fruits: ["Apple", "Banana"],
        Vegetables: ["Carrot", "Potato"],
    Dairy: ["Milk"]
}*/

/*const products = [
    { category: "Fruits", name: "Apple" },
    { category: "Vegetables", name: "Carrot" },
    { category: "Fruits", name: "Banana" },
    { category: "Dairy", name: "Milk" },
    { category: "Vegetables", name: "Potato" },
];*/

/*
const groupByCategory = (products) =>{
    const resObj =  products.reduce((acc, cur) => {
        if(!acc[cur.category]) acc[cur.category] = []
        acc[cur.category].push(cur.name);
        return acc;
    },{})

    return resObj

}
*/
/*const groupByCategory = (products)=>{
    const resObj = {}
    for (let el of products) {
        if(!resObj[el.category]){
            resObj[el.category] = [];
        }
        resObj[el.category].push(el.name);
    }
    return resObj;
}


console.log(groupByCategory(products))*/

/*
Напишите функцию countGrades(grades), которая вернёт объект с количеством каждой оценки.
{
    A: 2,
        B: 3,
    C: 1
}*/

/*
const grades = [
    { student: "Alice", grade: "A" },
    { student: "Bob", grade: "B" },
    { student: "Alice", grade: "A" },
    { student: "Charlie", grade: "C" },
    { student: "Bob", grade: "B" },
    { student: "Alice", grade: "B" }
];

const countGrades = (grades)=>{
    const gradesObj = grades.reduce((acc, grade) => {
        if(!acc[grade.grade]) acc[grade.grade] = 0;
        acc[grade.grade] += 1;
        return acc
    }, {})
    return gradesObj;
}

console.log(countGrades(grades))*/


/*Напишите функцию groupByDate(orders), которая вернёт объект, где ключами будут даты, а значениями — массив ID заказов.
{
    "2024-02-01": [101, 103],
    "2024-02-02": [102, 105],
    "2024-02-03": [104]
}*/
 /*   const orders = [
    { date: "2024-02-01", orderId: 101 },
    { date: "2024-02-02", orderId: 102 },
    { date: "2024-02-01", orderId: 103 },
    { date: "2024-02-03", orderId: 104 },
    { date: "2024-02-02", orderId: 105 }
];

    const groupByDate = (orders)=>{
        const resObj = orders.reduce((acc, order)=>{
          if(!acc[order.date]) acc[order.date] = [];
          acc[order.date].push(order.orderId);
          return acc
        }, {})

        return resObj;
    }

console.log(groupByDate(orders))*/



/*
/ Напишите тело функции getAllItems.
// Она должна возвращать плоский список содержащий все id переданного в неё дерева:
// переданного tree, его детей, детей его детей и так далее.

export interface TreeItem {
    id: string;
    children?: TreeItem[];
}

export const getAllItems = (tree: TreeItem): string[] => {

};*/

/*const getAllItems = (tree) => {
    const result = [];
    const traverse = (node) => {
        result.push(node.id);
        if (node.children) {
            node.children.forEach(traverse);
        }
    };

    traverse(tree);
    return result;
};
const tree1 = {
    id: "1",
    children: [
        { id: "2" },
        { id: "3", children: [{ id: "4" }, { id: "5" }] },
    ],
};

const tree2 = {
    id: "A",
    children: [
        { id: "B", children: [{ id: "C" }] },
        { id: "D", children: [{ id: "E", children: [{ id: "F" }] }] },
    ],
};

console.log(getAllItems(tree1)); // ["1", "2", "3", "4", "5"]
console.log(getAllItems(tree2)); // ["A", "B", "C", "D", "E", "F"]
console.log(getAllItems({ id: "X" })); // ["X"]*/


/*
Напиши функцию getMaxDepth(tree), которая принимает дерево и возвращает максимальную глубину вложенности.
console.log(getMaxDepth(tree)); // 4*/

/*const tree = {
    id: "1",
    children: [
        { id: "2" },
        { id: "3", children: [{ id: "4", children: [{ id: "5" }] }] },
    ],
};
const getMaxDepth = ( tree)=>{
    if (!tree.children || tree.children.length === 0) {
        return 1;
    }
    let depths = tree.children.map(getMaxDepth);
    return 1 + Math.max(...depths);
}

console.log(getMaxDepth(tree));*/

/*
const getMaxDepth = (tree, depth = 1) => {
    if (!tree.children || tree.children.length === 0) return depth;
    let maxChildDepth = 0;
    for (let child of tree.children) {
        maxChildDepth = Math.max(maxChildDepth, getMaxDepth(child, depth + 1));
    }
    return maxChildDepth;
};*/


/*
Напиши функцию findNodeById(tree, targetId), которая принимает дерево и targetId, а затем возвращает объект узла с этим id (или null, если узел не найден).

console.log(findNodeById(tree, "E")); // { id: "E", children: [{ id: "F" }] }
console.log(findNodeById(tree, "Z")); // null*/


/*const tree = {
    id: "A",
    children: [
        { id: "B", children: [{ id: "C" }] },
        { id: "D", children: [{ id: "E", children: [{ id: "F" }] }] },
    ],
};*/

/*const findNodeById = (tree, targetId)=>{
    if (tree.id === targetId) {
        return tree;
    }
    // Если у узла есть дочерние элементы, ищем в них
    if (tree.children) {
        for (let child of tree.children) {
            const result = findNodeById(child, targetId); // Рекурсивный поиск
            if (result) {
                return result; // Если нашли, возвращаем результат
            }
        }
    }
    // Если не нашли, возвращаем null
    return null;
}

console.log()*/

/*
Напиши функцию countNodes(tree), которая возвращает количество всех узлов в дереве.

console.log(countNodes(tree)); // 6*/

/*
const tree = {
    id: "root",
    children: [
        { id: "A" },
        { id: "B", children: [{ id: "C" }, { id: "D", children: [{ id: "E" }] }] },
    ],
};

const countNodes = (tree)=>{
    let count = 0;

    const nodeF = (nodes)=>{
        count = count + 1;
        if(nodes.children){
            nodes.children.forEach(nodeF)
        }
    }
    nodeF(tree)
    return count
}

console.log(countNodes(tree))*/
