const products = [
    {name: 'laptop', price: 32000, brand: 'Lenovo', color: 'Silver'},
    {name: 'phone', price: 7000, brand: 'Samsung', color: 'Black'},
    {name: 'watch', price: 3000, brand: 'Olves', color: 'Yellow'},
    {name: 'sunglass', price: 2000, brand: 'Myanta', color: 'Merun'},
    {name: 'camera', price: 8000, brand: 'Canon', color: 'Black'},
]

const brands = products.map( product => product.brand);
const prices = products.map( product => product.price );
console.log(brands, prices);

products.forEach(product => console.log(product.color));

products.forEach(product => {

})

// 3. filter
const cheap = products.filter(product => product.price <= 5000);
console.log(cheap);

const specefiqName = products.filter(product => product.name.includes('n'))
console.log(specefiqName);

// 4. find
const special = products.find( product => product.name.includes('a'));
console.log(special);