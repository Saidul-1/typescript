# Title: Type alias vs Interface

# Introduction
Type alias and Interface both can be used for custom data types. Type is explicitly used for type modification while Interface can also be used in OOP related functionalities. For literal and premitive types, type is used and for object types interface used mostly.

# Body
For object, type and interface both behaves almost same.
Union and Intersection can only be used to create a new type not interface.
For primitive and literal types, type is used
During merging, if there is duplicate properties, interface merge them using union while type gives compilation error

# Code
``` TS
type Grade = "A" | "B" | "F";
interface HasName { name: string; }
interface HasAge  { age: number; }

type User = HasName & HasAge & {grade: Grade};


interface vehicle {category: string;}
interface car = vehicle extends {model: string} 
```
# Conclusion
So, for primitive and literal type modification or unio, intersaction: type is cleaner approach
and for object, using Interface is better and it can also handle duplicate properties properly