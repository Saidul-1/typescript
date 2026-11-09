# Title: Type Narrowing

# Introduction
Type narrowing is narrowing down a data type before using it in an expression. It gives the type safety

# Body
In a function, we may have to take argument of mixed types but we can't use all methods in mixed types because there are many type specific methods. To use them with type safety we should have ensure that the type is exactly matched as expected. But in mixed type, it's may not possible. So we have to narrowed down the type before using those methods. We can use typeof to check the type before using those type specific methods.

# Code
``` TS
function printId(id: number | string) {
    // id.toUpperCase();              // Error: number has no toUpperCase although string has
    if (typeof id === "string") {
        console.log(id.toUpperCase()); // narrowed to string
    } else {
        console.log(id.toFixed(2));    // narrowed to number
    }
}
```
Here we can't use toUpperCase in number. So before using this method, we must narrowed down the type to exactly string type. We've achieved it using typeof id. Typescript strictly maintain this so that there is not mistake of running a method to a incompatible data type.

# Conclusion
Since there are so many type specific methods, we have to narrowed down the data type before using those methods. We can achieve this with the help of typeof property.