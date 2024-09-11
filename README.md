# JavaScript Notes

1. Javascript
 - JavaScript is a high-level programming language primarily used to create dynamic and interactive content on websites.
 - It is one of the core technologies of web development, alongside HTML and CSS.
 - JavaScript enables developers to implement complex features on web pages, such as interactive forms, animations, and real-time updates without refreshing the page.

2. Variables
 - Variables are containers that store data values.
 - Variables allows us to store, modify and retrieve data.

3. Declaring Variables
 Javascript provides three ways to declare variables
 - var (older way, function scoped, allows redeclaration and reassign)
 - let (latest way, bloack scoped, dont allow redeclaration, allows reassign)
 - const (latest way, block scoped, dont allow redeclaration, dont allow reassign)

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
