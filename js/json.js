
// JavaScript Object Notation
//JSON

const product = { name: 'samsung n570 Tv', price: 30000, colour: 'black', size: '32"' }
// console.log(product);

const productStringified = JSON.stringify(product);
// console.log(productStringified);

const convertToObject = JSON.parse(productStringified);
// console.log(convertToObject)



const shop = {
    name: 'Bikrompur Electronics',
    address: 'Jurain RailGate',
    products: ['electronic parts', 'magnets', 'soundboxes', 'service-centre'],
    owner1: {
        name: 'Jamal Hossain',
        address: 'Bikrompur Plaza',
        childrens: 2
    },
    owner2: {
        name: 'Kamal Hossain',
        address: 'Mirhazirbag',
        children: 2
    },
    isExpensive: true,
    profit: 200000
}

const shopStringified = JSON.stringify(shop);
// console.log(shop);
console.log(shopStringified);


const convert = JSON.parse(shopStringified);
console.log(convert)