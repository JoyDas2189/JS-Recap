// Strings are for storing text
let text = "Joy Das";


// Escape Characters
let escapeCharacter1 = "I also known as \"SH1NIGAMI\"";
let escapeCharacter2 = "I also known as 'SH1NIGAMI'";

console.log(escapeCharacter1);
console.log(escapeCharacter2);


// #template string.
let templateString = `I am Joy`;

console.log(templateString);
console.log(templateString.length);
console.log(typeof(templateString));


// Strings as Objects
let objectString = new String('Joy'); //complicates the code and slows down execution speed.

console.log(typeof(objectString));


let x = 'Joy';
let y = new String('Joy');
let z = new String('Joy');

console.log(x == y); //true
console.log(x === y); //false

// Comparing two JavaScript objects always returns false.
console.log(y == z); //false
console.log(y === z); //false


// String Methods...
// All string methods return a new string. They don't modify the original string.

// String length
let myStr = 'Joy Das';
console.log(myStr.length); // 7


// String charAt()
// The charAt() method returns the character at a specified index (position) in a string
let myStr1 = 'Joy Das';
console.log(myStr.charAt(2));


// String charCodeAt()
// The charCodeAt() method returns the code of the character at a specified index in a string:
let myStr2 = 'Joy Das';
console.log(myStr.charCodeAt(1));


// String at()
let myStr3 = 'Joy Das';
console.log(myStr.at(2));


// String [ ]
let myStr4 = 'Joy Das';
console.log(myStr[0]); //J
console.log(myStr[10]); //Undefined


// String slice() 
// extracts a part of a string and returns the extracted part in a new string.
let myStr5 = 'Joy Das';
console.log(myStr.slice(0, 3));
console.log(myStr.slice(-3));
console.log(myStr.slice(-7, -5))

// String substring()
// String substr()


// String toUpperCase()
// String toLowerCase()
// String concat()
let myStr6 = 'Joy';
let myStr7 = 'Das';
let concatedStr = myStr6.concat(" ", myStr7);
console.log(concatedStr);


// String trim()
let myStr8 = '       Joy Das     ';
let trimmedString = myStr8.trim()
console.log(myStr8.length)
console.log(trimmedString.length);


// String trimStart()
let myStr9 = "5";
let paddedSting = myStr9.padEnd(5, "*")

console.log(paddedSting);
// String trimEnd()

// String padStart()
// String padEnd()


// String repeat()
let myStr10 = "Hello world! ";
let result = myStr10.repeat(2);
console.log(result);

// String replace()
// String replaceAll()
// String split()