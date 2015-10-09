//
// Diferencial Inheritance example. Don't code like this. Use Functional Constructors instead.
//
'use strict';

var MyMammal = {
    name: 'Herb the Mammal',
    get_name: function () {
        return this.name;
    },
    says: function () {
        return this.saying || '';
    }
};

//
// ---- Using the 'Object.create' helper
// 
if (typeof Object.create !== 'function') {
    Object.prototype.create = function (o) {
        var F = function () {};
        F.prototype = o;
        return new F();
    };
}
var myCat = Object.create(MyMammal);
myCat.name = 'Henrietta';
myCat.saying = 'meow';
myCat.purr = function () {
    return 'rrrrrr';
}
myCat.get_name = function () {
    return this.says() + ' ' + this.name + ' ' + this.says();
};

console.log(myCat.get_name()); // meow Henrietta meow

//
// ---- Without using the 'Object.create' helper
// 
var F = function () {}; //TODO: can I improve this?
F.prototype = MyMammal;
var myCat = new F();
myCat.name = 'Henrietta';
myCat.saying = 'meow';
myCat.purr = function () {
    return 'rrrrrr';
}
myCat.get_name = function () {
    return this.says() + ' ' + this.name + ' ' + this.says();
};

console.log(myCat.get_name()); // meow Henrietta meow
