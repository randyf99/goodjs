//
// Pseudoclass example. Don't code like this. Use Functional Constructors instead.
//
'use strict';

// Make a pseudoclass
var Mammal = function (name) {
    this.name = name;
};
Mammal.prototype.get_name = function () {
    return this.name;
};
Mammal.prototype.says = function () {
    return this.saying || '';
}

var myMammal = new Mammal('Herb the Mammal');
var name = myMammal.get_name(); 
console.log(name); // Herb the Mammal

// Make another pseudoclass that inherits from Mamma1
var Cat = function (name) {
    this.name = name;
    this.saying = 'meow';
};

// Replace Cat.prototype with a new instance of Mammal
Cat.prototype = new Mammal();

// Augment the new prototype with purr and get_name methods
Cat.prototype.purr = function () {
    return 'rrrrrr';
};
Cat.prototype.get_name = function () {
    return this.says() + ' ' + this.name + ' ' + this.says();
};

var myCat = new Cat('Henrietta');
var says = myCat.says(); // 'meow'
var purr = myCat.purr(); // 'rrrrrr'
var name = myCat.get_name(); // 'meow Henrietta meow'
console.log([ says, purr, name ]); // [ 'meow', 'rrrrrr', 'meow Henrietta meow' ]
