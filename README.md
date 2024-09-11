# JavaScript Notes

1. Javascript
   
  1) JavaScript is a high-level programming language primarily used to create dynamic and interactive content on websites.
  2) It is one of the core technologies of web development, alongside HTML and CSS.
  3) JavaScript enables developers to implement complex features on web pages, such as interactive forms, animations, and real-time updates without refreshing the page.

2. Variables
   
  1) Variables are containers that store data values.
  2) Variables allows us to store, modify and retrieve data.

3. Declaring Variables
   Javascript provides three ways to declare variables
  1) var (older way, function scoped, allows redeclaration and reassign)
  2) let (latest way, bloack scoped, dont allow redeclaration, allows reassign)
  3) const (latest way, block scoped, dont allow redeclaration, dont allow reassign)

 ### Note: function scoped means accessable in the function only---block scoped means accessable within {}

 ## Example
```javascript
var num;
num = 5;
console.log(num);

let firstName;
firstName = "Vamshi";
console.log(firstName);

const birthYear = 1996;
console.log(birthYear);
```
4. DataTypes
   There are 7 data types
   1) Number
   2) String
   3) null
   4) Boolean
   5) Object
   6) Array
   7) undefined
