"use strict";

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

var People = function () {
    function People(name, email, phone) {
        _classCallCheck(this, People);

        this.name = name;
        this.email = email;
        this.phone = phone;
    }

    _createClass(People, [{
        key: "toString",
        value: function toString() {
            return "\n            Name: " + this.name + "\n            Email: " + this.email + "\n            Phone: " + this.phone + "\n        ";
        }
    }]);

    return People;
}();

var Client = function (_People) {
    _inherits(Client, _People);

    function Client(id, name, email, phone) {
        _classCallCheck(this, Client);

        var _this = _possibleConstructorReturn(this, (Client.__proto__ || Object.getPrototypeOf(Client)).call(this, name, email, phone));

        _this.id = id;
        return _this;
    }

    _createClass(Client, [{
        key: "toString",
        value: function toString() {
            return "\n            id: " + this.id + " " + _get(Client.prototype.__proto__ || Object.getPrototypeOf(Client.prototype), "toString", this).call(this) + "\n        ";
        }
    }]);

    return Client;
}(People);

var test = new Client(1, "Guilherme", "gui@mailcom", "119999-9999");
console.log(test.toString());
