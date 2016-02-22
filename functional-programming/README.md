### Javascript Functions -- Best practices

###Guidelines
1. **Don't repeat yourself**. Reuse logic. "Quarantine" functionality to a single source.
2. **Do One Thing**
3. **Keep It Simple**. Don't be "too clever" or cryptic. A single line of code should usually not achieve more than 1 atomic goal.
4. **Less is More**. Keep functions as short as possible (generally 25 lines maximum).

###2 Common Errors
1. **Syntax errors**
2. **Unintended side effects**: A "pure function" has no unintended side effects. Functions should not manipulate or change (or reference) their inputs.

```
// Common Gotcha:

// Bad (because it references the original object)
var foo = function foo(params) {
  items = params.items;
  return items;
};


// Good
var bar = function foo(params) {
  items = Object.create(params.items);
  return items;
}
```

###Best way to define a function
```
// 1. Function declaration
function foo() {
  
}

// 2. Unnamed Function Expression
// Problem: The function will be anonymous (unnamed), meaning call stacks will
// be harder to read.
var foo = function() {
  
};


// 3. Unnamed Method literal
// Problem: The function will be anonymous (unnamed), meaning call stacks will
// be harder to read.
var fooObj = {
  doSomething: function() {

  }
};

// 4. Function() constructor (Bad idea.  Don't do this.)

// 5. Named Function Expressions (Usually the best method)
// Advantages: 
// 1. The function has a name.  Callstacks are easy to read.
// 2. The function can refer to itself within itself, allowing recursion.
// But... Keep in mind that the name is only available within the function.

var foo = function foo() {
  
};

var fooObject = {
  myFunction: function myFunction() {

  }
};
```

### Terminology
- **First class functions**:
- **Higher Order Function**:
- **Functional programming**:
- **Lambda**: A function that can be used as data.
- **Closure**:
- **IIFE (Immediately Invoked Function Expression)**
- **Hoisting**:
- **Function Polymorphism**:
- **Partial Application**:
- **Currying**:
