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

var list = [
    "test",
    34,
    {name: "Guilherme"}
];

for(var i in list) {
    // console.log(i);
    // console.log(list[i]);
}

for(let i of list) {
    console.log(i);
}