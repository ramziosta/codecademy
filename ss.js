// const list = [{item: 'Carrots'}, {item: 'Hummus'}, {item: 'Pesto'}, {item: 'Rigatoni'}]
// let index= list.length - 1
// const groceries = (arr) => {return arr.map(grocery => grocery.item)}
// let newList=[];
// groceries(list).join(" ")

class Stack {
    constructor(stack) {
        this._stack = [];
        this._count = 0;
    }
    push(item) {
        this._stack[this._count] = item;
        this._count++;
        console.log(`${item} added`);
        return this._count -1;
}
}

const stack = new Stack();

stack.push(100);