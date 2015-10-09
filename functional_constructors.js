//
// Funcional Constructors example. Use this instead of pseudoclasses, taking full advantage of JS's prototypal nature.
//
'use strict';

var mammal = function (spec) {
    var that = {};

    that.get_name = function () {
        return spec.name;
    };

    that.says = function () {
        return spec.saying || '';
    };

    return that;
};

var myMammal = mammal({name: 'Herb'});

var cat = function (spec) {
    spec.saying = spec.saying || 'meow';
    var that = mammal(spec);
    that.purr = function () {
        return 'rrrrrr';
    };
    that.get_name = function () {
        return that.says() + ' ' + spec.name + ' ' + that.says();
    };
    return that;
};

var myCat = cat({name: 'jorge'});
var says = myCat.says(); // 'meow'
var purr = myCat.purr(); // 'rrrrrr'
var get_name = myCat.get_name(); // 'meow jorge meow'
console.log([ says, purr, get_name ]);
