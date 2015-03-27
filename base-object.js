'use strict';

function BaseObject() {}

BaseObject.prototype.init = function() {};

BaseObject.prototype.extend = BaseObject.extend = function(obj) {
    for (var k in obj) {
        if (obj.hasOwnProperty(k)) {
            if (BaseObject.prototype.hasOwnProperty(k) && typeof obj[k] === 'function') {
                var base = BaseObject.prototype[k];
                BaseObject.prototype[k] = obj[k];
                BaseObject.prototype[k]._base = base;
            } else {
                BaseObject.prototype[k] = obj[k];
            }
        }
    }

    return function() {
        var instance = new BaseObject();
        instance.init.apply(instance, arguments);
        return instance;
    };
};

/* global define:true module:true window: true */
if (typeof define === 'function' && define['amd'])      { define(function() { return BaseObject; }); } 
if (typeof module !== 'undefined' && module['exports']) { module['exports'] = BaseObject; } 
if (typeof window !== 'undefined')                      { window['BaseObject'] = BaseObject; }
