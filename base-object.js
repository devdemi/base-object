'use strict';

function BaseObject() {}

BaseObject.prototype.init = function() {};

BaseObject.prototype.extend = BaseObject.extend = function(obj) {
    var instance = new BaseObject();
    for (var k in obj) {
        if (!obj.hasOwnProperty(k)) {
            continue;
        }
        if (this.hasOwnProperty(k) && typeof obj[k] === 'function') {
            var base = this[k];
            instance[k] = obj[k];
            instance[k]._base = base;
        } else {
            instance[k] = obj[k];
        }
    }

    return function() {
        instance.init.apply(instance, arguments);
        return instance;
    };
};

/* global define:true module:true window: true */
if (typeof define === 'function' && define['amd'])      { define(function() { return BaseObject; }); }
if (typeof module !== 'undefined' && module['exports']) { module['exports'] = BaseObject; }
if (typeof window !== 'undefined')                      { window['BaseObject'] = BaseObject; }
