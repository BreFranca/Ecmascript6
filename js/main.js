"use strict";

// var bob = {
//     _name: "Bob",
//     _friends: ["Guilherme", "Camila", "Murilo"],
//     printFriends: function printFriends() {
//         var self = this;
//         this._friends.forEach(function(f) {
//             return console.log(self.name + " knows " + f);
//         })
//     }
// }

// bob.printFriends();

// var color = () => console.log("red");
// color();

// var bob = {
//     _name: "Bob",
//     _friends: ["Guilherme", "Camila", "Murilo"],
//     printFriends: function printFriends() {
//         this._friends.forEach(f => console.log(this._name + " knows " + f));
//     }
// }

// bob.printFriends();

// class Color {
//     constructor(codeColor, nameColor) {
//         this.codeColor = codeColor;
//         this.nameColor = nameColor;
//     };
//     getColor() {
//         return {
//             codeColor: this.codeColor,
//             nameColor: this.nameColor
//         }
//     };
// }

// let red = new Color("ff0000", "Red");
// console.log(red.getColor());


// let name = "Breno";
// let age = 23;
// // let text = "name: " + name + " age: " + age;
// let text = `
//     name: ${ name }
//     age: ${ age }
// `;

// console.log(text);

// function test(valueA) {
//     var valueB = arguments.length <- 1 || arguments[1] === undefined ? 4 : arguments[1];
//     return valueA + valueB;
// }

// console.log(test(4, 1));

// function test(valueA, valueB = 4) {
//     return valueA + valueB;
// }

// console.log(test(5));

// var list = [
//     "test",
//     34,
//     {name: "Guilherme"}
// ];

// for(var i in list) {
//     // console.log(i);
//     // console.log(list[i]);
// }

// for(let i of list) {
//     console.log(i);
// }

// class People {
//     constructor(name, email, phone) {
//         this.name = name;
//         this.email = email;
//         this.phone = phone;
//     }
//     toString() {
//         return `
//             Name: ${this.name}
//             Email: ${this.email}
//             Phone: ${this.phone}
//         `;
//     }
// }

// class Client extends People {
//     constructor(id, name, email, phone) {
//         super(name, email, phone);
//         this.id = id;
//     };
//     toString() {
//         return `
//             id: ${this.id} ${super.toString()}
//         `;
//     }
// }

// var test = new Client(1, "Guilherme", "gui@mailcom", "119999-9999");
// console.log(test.toString());

var color = new Set();
color.add("red").add("green").add("red");

if (color.size === 2 && color.has("red")) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = color.values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var key = _step.value;

            console.log(key);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
}
