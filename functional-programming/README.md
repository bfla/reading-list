### Javascript Functions -- Best practices

**Guidelines**
1. Don't repeat yourself
- reuse logic
- "quarantine" functionality to a single source
2. Do One Thing
3. Keep It Simple
- don't be "too clever" or cryptic
- a single line of code should usually not achieve more than 1 atomic goal
4. Less is More
- keep functions as short as possible
- <25 lines

**2 Common Errors**
1. syntax errors
2. unintended side effects
- a "pure function" has no unintended side effects
- functions should not manipulate or change their inputs

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