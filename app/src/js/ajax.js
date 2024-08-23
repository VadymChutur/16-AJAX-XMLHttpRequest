'use strict';

console.log('test');
// function foo() {
//   console.log(this);
// }

// foo();

// const boo = function () {
//   console.log(this);
// };

// boo();

// const arrow = () => this;

// console.log(arrow());

// const objA = {
//   name: 'User name',
//   skills: {
//     mySkill: 'html, css, sass, js, webpack',
//     someValue: {
//       value: 10,
//       nickName() {
//         console.log(this);
//       },
//     },
//   },
// };

// objA.nickName();
// objA.skills.someValue.nickName();

// const objB = {
//   name: 'Nick name',
//   skills: {
//     mySkill: 'html, css, sass, js, webpack',
//     foo: () => {
//       function nickName() {
//         console.log(this);
//       }
//       nickName();
//     },
//   },
// };

// objB.skills.foo();
// const objC = {
//   age: 22,
//   skills: {
//     skill: ['html', 'css'],
//     boo() {
//       const test = () => {
//         console.log(this);
//       };
//       test();
//     },
//   },
// };
// const objC = {
//   age: 22,
//   myAge() {
//     const test = () => {
//       console.log(this);
//     };
//     test();
//   },
// };

// const objD = {
//   age: 12,
//   someFunction: objC.myAge,
// };

// objC.myAge();
// objD.someFunction();

// const objC = {
//   age: 22,
//   myAge() {
//     const test = () => {
//       console.log(this);
//     };
//     test();
//   },
// };

// const objD = {
//   age: 12,
//   someFunction: objC.myAge,
// };

// const objE = {
//   age: 13,
//   somecrazy: objD.someFunction,
// };

// objE.somecrazy();

// const objF = {
//   name: 'F',
//   foo: () => {
//     console.log(this);
//   },
// };
// objF.foo();

// const objG = {
//   age: 22,
//   myAge(a, b) {
//     console.log(this, a, b);
//   },
// };

// objG.myAge(21, 44);

// const objJ = {
//   age: 23,
// };

// objG.myAge.call(objJ, 1, 2); //викликає тут і зараз визначений this

// objG.myAge.call(objJ, ...[6, 8, 40, 80]); //викликає тут і зараз визначений this

// objG.myAge.apply(objJ, [3, 4, 50, 60]); //викликає функцію приймає масив, розпиляє його та передає в аргументи

// const r = objG.myAge.bind(objJ); //копіює функцію та на завжди привязує this, оголошуєтся як змінна

// console.log(r);

// r(1, 2, 3);
// r(7, 8, 9);
// r(4, 5, 6);

const chopShop = {
  stones: [
    { name: 'Emerald', price: 1300, quantity: 4 },
    { name: 'Diamond', price: 2700, quantity: 3 },
    { name: 'Sapphire', price: 1400, quantity: 7 },
    { name: 'Ruby', price: 800, quantity: 2 },
  ],
  calcTotalPrice(stoneName) {
    const { price, quantity } = this.stones.find(
      ({ name }) => name === stoneName
    );
    return price * quantity;
  },
};

const shop2 = {
  stones: [
    { name: 'Granite', price: 1300, quantity: 4 },
    { name: 'Sand', price: 2700, quantity: 3 },
    { name: 'Concryte', price: 1400, quantity: 7 },
    { name: 'Brikcs', price: 800, quantity: 2 },
  ],
};

console.log(chopShop.calcTotalPrice('Emerald'));
console.log(chopShop.calcTotalPrice('Diamond'));
console.log(chopShop.calcTotalPrice('Sapphire'));
console.log(chopShop.calcTotalPrice('Ruby'));
console.log(chopShop.calcTotalPrice.call(shop2, 'Sand'));
//-------------------------------------------------------------------
const phonebook = {
  contacts: [],
  add(contact) {
    const newContact = {
      list: 'default',
      ...contact,
      id: this.generatedId(),
      createdAt: this.getDate(),
    };
    this.contacts.push(newContact);
    return this.contacts;
  },
  generatedId() {
    return '_' + Math.random().toString(36).substr(2, 9);
  },
  getDate() {
    return Date.now();
  },
};

console.log(
  phonebook.add({
    name: 'Mango',
    email: 'mango@mail.com',
    list: 'friends',
  })
);

console.log(
  phonebook.add({
    name: 'Poly',
    email: 'poly@mail.com',
  })
);

//-------------------------------------------------------------------
const calculator = {
  read(a, b) {
    (this.a = a), (this.b = b);
  },
  add() {
    return this.a + (this.b ?? 0);
  },
  mult() {
    return this.a * (this.b ?? 1);
  },
};

calculator.read(1);
console.log(calculator);
console.log(calculator.add());
console.log(calculator.mult());

const calculator2 = {};
calculator.read.call(calculator2, 3, 4);
console.log(calculator2);
