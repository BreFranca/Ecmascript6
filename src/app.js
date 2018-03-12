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

class Color {
    constructor(codeColor, nameColor) {
        this.codeColor = codeColor;
        this.nameColor = nameColor;
    };
    getColor() {
        return {
            codeColor: this.codeColor,
            nameColor: this.nameColor
        }
    };
}

let red = new Color("ff0000", "Red");
console.log(red.getColor());