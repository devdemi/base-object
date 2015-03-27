# base-object
Implementation of inheritance in JavaScript

## How to build?

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `npm run build`

## Usage

```javascript

var Person = BaseObject.extend({
    init: function(name, age) {
        this.name = name;
        this.age = age;
    },
    grow: function() {
        this.age++;
        console.log('Person ' + this.name + ' grows, new age ' + this.age);
    }
})('Ben', 30);

Person.grow();

var Worker = Person.extend({
    init: function(name, age, position) {
        this.init._base.apply(this, arguments);
        this.position = position;
    },
    promote: function() {
        console.log('Worker ' + this.name + ' became Senior ' + this.position);
    },
    grow: function() {
        this.promote();
        this.grow._base.call(this);
    }
})('Vova', 30, 'engineer');

Worker.grow();

```
