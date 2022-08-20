const list = [{item: 'Carrots'}, {item: 'Hummus'}, {item: 'Pesto'}, {item: 'Rigatoni'}]
let index= list.length - 1
const groceries = (arr) => {return arr.map(grocery => grocery.item)}
let newList=[];
groceries(list).join(" ")

