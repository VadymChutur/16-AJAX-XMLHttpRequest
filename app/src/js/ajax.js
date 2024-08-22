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

const objA = {
  name: 'User name',
  skills: {
    mySkill: 'html, css, sass, js, webpack',
    someValue: {
      value: 10,
      nickName() {
        console.log(this);
      },
    },
  },
};

// objA.nickName();
objA.skills.someValue.nickName();

const objB = {
  name: 'Nick name',
  skills: {
    mySkill: 'html, css, sass, js, webpack',
    foo: () => {
      function nickName() {
        console.log(this);
      }
      nickName();
    },
  },
};

objB.skills.foo();
