4 Types of scope

1. Global Scope
2. Functional Scope
3. Block Scope
4. Module Scope

### Global Scope

- Variable declared outside of the function or block scope, these are called as global scope.

  ```jsx
  let name = "seokjin"; // name , declared from "let" --> doesnot get added to window.name// '' obj.
  var name1 = "namjoon"; // name, declared from "var" --> gets added to window.name obj. // namjoon
  function greeting() {
    console.log("hello", name);
  }

  greeting();

  console.log(name);

  {
    console.log("Inside Block", name);
  }
  ```

### Function Scope

- Variable declared inside a function are only accessible within the function.

```jsx
function toDo() {
  var task = "Learning 40 days of Js";
  console.log(task);
}
toDo();

console.log(task);
// task doesnot exist for global
```

### Block Scope

- The variables declared inside a block
- variable cannot be accessed outside the block

```jsx
{
  let count = 10;
  console.log(count);
}

console.log(count);
//reference errro.
```

## Points to remember

1. Var —> always function scope
2. Let , const —→block scope

### Scope Chain

- search for variable to nearest scope.
- will move to upper hierarchy when cannot find in within the reach of current scope.

### Variable Shadowing

Hides the value , of same variable name

Consider the scope present nearest.
