/*

 - Сортує і змінює вихідний масив.
 - Повертає змінений масив, тобто посилання на відсортований вихідний.
 - За замовчуванням сортує за зростанням.
 - Сортування відбувається шляхом приведення значень до рядка і порівняння порядкових номерів у таблиці Unicode.
 
*/

let cars = [
  {
    make: 'Honda',
    model: 'CR-V',
    type: 'suv',
    amount: 10,
    price: 24045,
    onSale: true,
  },
  {
    make: 'Honda',
    model: 'Accord',
    type: 'sedan',
    amount: 10,
    price: 22455,
    onSale: true,
  },
  {
    make: 'Mazda',
    model: 'Mazda 6',
    type: 'sedan',
    amount: 10,
    price: 24195,
    onSale: false,
  },
  {
    make: 'Mazda',
    model: 'CX-9',
    type: 'suv',
    amount: 7,
    price: 31520,
    onSale: true,
  },
  {
    make: 'Toyota',
    model: '4Runner',
    type: 'suv',
    amount: 19,
    price: 34210,
    onSale: false,
  },
  {
    make: 'Toyota',
    model: 'Sequoia',
    type: 'suv',
    amount: 16,
    price: 45560,
    onSale: false,
  },
  {
    make: 'Toyota',
    model: 'Tacoma',
    type: 'truck',
    amount: 4,
    price: 24320,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'F-150',
    type: 'truck',
    amount: 11,
    price: 27110,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'Fusion',
    type: 'sedan',
    amount: 13,
    price: 22120,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'Explorer',
    type: 'suv',
    amount: 6,
    price: 31660,
    onSale: false,
  },
];

cars.sort((a, b) => {
  if (a.make != b.make) return a.make.localeCompare(b.make);

  if (a.amount === b.amount) {
    return a.price - b.price;
  } else {
    return a.amount - b.amount;
  }
});

console.table(cars);

// ===============

// const arr = [99, 10, 6, 1, 4, 6, 7, 2, 5, 7, 98, 3, 2, 46, 8, 43, 2];

// const result = [...arr].sort((b, a) => {
//   console.log(a - b);
//   return a - b;
// });

// console.log(result);

// console.log(String.fromCharCode(0));
