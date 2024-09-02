// class Car {
//     constructor(brand, maxSpeed) {
//         this.brand = brand
//         this.maxSpeed = maxSpeed
//         this.state = {}
//     }
//     startEngine() {
//         console.log(`${this.brand} is started`)
//     }
//     stopEngine = () => {
//         console.log(`${this.brand} is stoped`)
//     }
// }
//
// const car1 = new Car('bmw', 200)
// const car2 = new Car('bmw', 200)
//
// console.log(car1 === car2)
// console.log(car1.name === car2.name)
// console.log(car1.state === car2.state)
//
// console.log(car1.startEngine === car2.startEngine)
// console.log(car1.stopEngine === car2.stopEngine)
//
// console.log(car1.__proto__=== Car.prototype)


// const foo = () => {};
// function foo2() {}
// const foo3 = function () {};
// console.log(foo.__proto__ === Function.prototype);
// // console.dir(foo.bind());
// console.log(foo2.__proto__ === Function.prototype);
// console.log(foo3.__proto__ === Function.prototype);

// console.log(Function.__proto__ === Object.prototype); //??
// console.log(Function.__proto__ === null); // ??
// console.log(Function.__proto__ === Function.prototype); // ??
// console.log(Function.__proto__.__proto__ === Object.prototype); // ??

// const str ="dsf";
// console.log(str.__proto__ === String.prototype);

// const a = 5;
// const b = 5;
// console.log(a.__proto__ === Number.prototype);
// console.log(a.__proto__ === b.__proto__);

// const obj1 = {};
// const obj2 = {};
// const obj3 = new Object();
//
// console.log(obj1.__proto__ === obj2.__proto__); // ?
// console.log(obj1.__proto__ === obj3.prototype);

// const arr1 = new Array()
// const arr2 = []
//
// console.log(arr1 === arr2) // ?
// console.log(arr1.__proto__ === Array.prototype)
// console.log(arr2.__proto__ === Array.prototype)
// console.log(Object.__proto__ === Function.prototype);
