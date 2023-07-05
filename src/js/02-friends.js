/*
 * Работа с коллекцией (массивом объектов)
 */

// console.table(friends);

/*
 * Ищем друга по имени
 */
// const friends = [
//   { name: 'Mango', online: false },
//   { name: 'Kiwi', online: true },
//   { name: 'Poly', online: false },
//   { name: 'Ajax', online: false },
// ];

// function findFriend(friendName) {
//   for (let friend of friends) {
//     if (friend.name === friendName) {
//       return true;
//     }
//   }

//   return false;
// }

// const result = findFriend('awdawd');
// console.log(result);
/*
 * Получаем имена всех друзей
 */

/* function getFriendsName() {
  const result = [];
  for (const el of friends) {
    result.push(el.name);
  }
  console.log(result);
}

getFriendsName(); */

/*
 * Получаем имена только друзей которые онлайн
 */

const friends = [
  { name: 'Mango', online: false },
  { name: 'Kiwi', online: true },
  { name: 'Poly', online: true },
  { name: 'Ajax', online: false },
];

// function getOnlineFriends() {
//   const result = [];
//   for (let el of friends) {
//     if (el['online']) {
//       result.push(el);
//     }
//   }
//   return result;
// }

// const onlineFriends = getOnlineFriends();

// onlineFriends[0].name = 'VOLODKA';
// console.log(onlineFriends);

// console.log(friends);

// создать 2 массива онлайн и офлайн?
// если тру - в первый, если нет - во второй
// ============================

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7, test: 'HELLO' },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// getProps('test'); // ['Radar','Scanner','Droid','Grip']
// getProps('price'); // [1300,2700,400,1200]
// getProps('sefsef'); // []
