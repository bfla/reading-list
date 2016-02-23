# Javascript Objects

### Principles
1. Program to interface, not implementation
2. Favor object composition over class inheritance.
3. Open-closed principle: Objects should be open to extension but closed to
breaking changes.

### Problems with classical inheritance
- Tight coupling
- Inflexible hierarchies
- Multiple inheritance is convoluted
- Brittle architecture
- Gorilla/banana problem
- Programs to parent's implementation

### Object patterns

1. **Prototype delegation**
- Creates a new object with another object as its prototype (delegate)
- Alter objects without affecting other objects
- Conserve memory (the prototype is just one object in memory)
- Sharing state (nonmethod data) on a prototype is commonly considered an 
anti-pattern. (Accidental mutations of shared properties are a common source of 
bugs. This is partly due to the pitfall demonstrated below.)

```
// This is prototype delegation:
var myProto = {
  foo: function foo() { 
    console.log('do something');
  } 
},
myObj = Object.create(myProto);

// Pitfall: Changing an existing object or array property on an object's 
// delegate will change it on the prototype!
var myProto = {
  meta: {name: 'fancy name'}
},
myObj = Object.create(myProto);
// BAD: This would alter the prototype:
myObj.meta.name = 'a new name'; 
// BETTER: This wouldn't alter the prototype:
myObj.meta = {name: 'new object with name'}; 
// BEST - just don't store state (data) on prototypes.
```

2. **Prototype cloning**
- Creates a copy
-
``` 
_.extend({}, myProto) // using underscore.js
// or
$.extend({}, myProto) // using jQuery
// or in ES6
Object.assign()
```

// Class-based inheritance (arguably disfavored)

// new Keyword

// Factories
```