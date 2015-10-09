//
// Super Methods example, used with Funcional Constructrs.
//
'use strict';

var cat = function (spec) {
    var that = {};
    that.says = function () {
        return spec.saying || '';
    };
    that.get_name = function () {
        return that.says() + ' ' + spec.name + ' ' + that.says();
    };
    return that;
};


//
// --- Using the 'superior' helper
//
Object.prototype.superior = function (name) {
    var that = this,
        method = that[name];
    return function () {
        return method.apply(that, arguments);
    };
};
var coolcat = function (spec) {
    var that = cat(spec),
        superior_get_name = that.superior('get_name');
    that.get_name = function (n) {
        return 'like ' + superior_get_name() + ' baby';
    };
    return that;
};

var myCoolCat = coolcat({name: 'Bix', saying: 'meow'});
var name = myCoolCat.get_name(); 
console.log(name); // like meow Bix meow baby

//
// ---- Not using the 'superior' helper
//
var coolkit = function (spec) {
    var that = cat(spec);
    var superior_get_name = (function () {
        var other = that;
        var method = other['get_name'];
        return function () {
            return method.apply(other, arguments);
        };
    })();

    that.get_name = function (n) {
        return 'like ' + superior_get_name() + ' baby';
    };
    return that;
};


var myCoolKit = coolkit({name: 'Bix', saying: 'meow'});
var name = myCoolKit.get_name();
console.log(name); // like meow Bix meow baby
