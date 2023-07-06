/*
 * Операция spread (распыление)
 * - Array.prototype.concat() и аналог через spread
 */

// const arr1 = [1, 2, 3, 4, 4];
// const arr2 = Array.from(arr1);
// const arr2 = { ...arr1 };
// console.log(arr1 === arr2);
// console.log(arr1, arr2);

/* const obj1 = {
  a: 10,
  b: 20,
};
const obj2 = [...obj1];
console.log(obj2, obj1); */

/*
 * Поиск самой маленькой или большой температуры (числа)
 */

// const temps = [21, 17, 29, 24];
// console.log(Math.max(...temps));
// console.log(Math.min(...temps));

/*
 * Сшиваем несколько массивов в один через concat() и spread
 */

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [7, 8, 9];
// const result = arr3.concat(['TEST'],arr1,['TEST'], arr2);
// const result = [...arr3, 'TEST', ...arr1, 'TEST', ...arr2];
// console.log(result);

/*
 * Распыление объектов
 * - Object.prototype.assign() и spread
 */

const obj = {
  username: 'hello',
  age: 123,
  test: '34535',
};

const obj1 = Object.assign(obj);
console.log(obj1, obj);
console.log(obj1 === obj);
const obj2 = { ...obj1 };
console.log(obj1 === obj2);
