let getraenke = [
    'Apfelsaft',
    'Coca-Cola',
    'Fanta',
    'Orangensaft',
    'Pepsi',
    'Red Bull Energy Drink',
    'Sprite',
    'Traubensaft',
];

getraenke.forEach((element) => {
    console.log(element);
    document.write(element);
});

console.log('===========================');

const upperDrinks = getraenke.map((element) => {
    return element.toUpperCase();
});

console.log(upperDrinks);

console.log('===========================');

let array = [
    18, 16, 80, 51, 47, 38, 95, 42, 68, 61, 34, 51, 20, 17, 56, 31, 100, 6, 5,
    30, 74, 97, 28, 99, 91, 27, 73, 12, 92, 6, 27, 71, 26, 15, 78,
];

const arrangedArray = array
    .map((num) => {
        return num * 2;
    })
    .sort((a, b) => {
        return a - b;
    });

console.log(arrangedArray);

console.log('===========================');

let fahrenheit = [0, 32, 45, 50, 75, 80, 99, 120];

const celsius = fahrenheit.map((temp) => {
    return Math.round((temp - 32) / 1.8);
});

console.log(celsius);

console.log('===========================');
