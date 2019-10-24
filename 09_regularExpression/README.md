# Creating a regular expression

```
let re1 = new RegExp("abc");
let re2 = /abc/;
```

Both of those regular expression objects represent the same pattern: an a character followed by a b followed by a c.


# Testing for matches

the simplest method is ```.test```
If you pass it a string, it will return a Boolean telling you whether the string contains a match of the pattern in the expression.

```
console.log(/abc/.test("abcde"));
// → true
console.log(/abc/.test("abxde"));
// → false
```
# Sets of characters


- \d	Any digit character
- \w	An alphanumeric character (“word character”)
- \s	Any whitespace character (space, tab, newline, and similar)
- \D	A character that is not a digit
- \W	A nonalphanumeric character
- \S	A nonwhitespace character
- .	Any character except for newline


**Matchig the date:**
```
let dateTime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;
console.log(dateTime.test("01-30-2003 15:20"));
// → true
console.log(dateTime.test("30-jan-2003 15:20"));
// → false
```

When you looking for some character expect choosen one: 
```
let notBinary = /[^01]/;
console.log(notBinary.test("1100100010100110"));
// → false
console.log(notBinary.test("1100100010200110"));
// → true
```

# Repeating parts of a pattern
- plus sign (+) after something in a regular expression, indicates that the element may be repeated more than once.
- The star (*) has a similar meaning but also allows the pattern to match zero times.
- A question mark (?) makes a part of a pattern optional, meaning it may occur zero times or one time. 
- To indicate that a pattern should occur a precise number of times, use braces. Putting {4} after an element, for example, requires it to occur exactly four times. It is also possible to specify a range this way: {2,4} means the element must occur at least twice and at most four times.
- The (i) at the end of the expression in the example makes this regular expression case insensitive.

# Matches and groups

Regular expressions also have an ```exec``` (execute) method that will return ```null``` if no match was found and return an object with information about the match otherwise.
```
let match = /\d+/.exec("one two 100");
console.log(match);
// → ["100"]
console.log(match.index);
// → 8
```

The pipe character (|) denotes a choice between the pattern to its left and the pattern to its right. So I can say this:
```
let animalCount = /\b\d+ (pig|cow|chicken)s?\b/;
console.log(animalCount.test("15 pigs"));
// → true
console.log(animalCount.test("15 pigchickens"));
// → false
```
# The replace method

String values have a ```replace``` method that can be used to replace part of the string with another string.

```
console.log("Borobudur".replace(/[ou]/, "a"));
// → Barobudur
console.log("Borobudur".replace(/[ou]/g, "a"));
// → Barabadar
```

# Summary 

- /abc/	A sequence of characters
- /[abc]/	Any character from a set of characters
- /[^abc]/	Any character not in a set of characters
- /[0-9]/	Any character in a range of characters
- /x+/	One or more occurrences of the pattern x
- /x+?/	One or more occurrences, nongreedy
- /x*/	Zero or more occurrences
- /x?/	Zero or one occurrence
- /x{2,4}/	Two to four occurrences
- /(abc)/	A group
- /a|b|c/	Any one of several patterns
- /\d/	Any digit character
- /\w/	An alphanumeric character (“word character”)
- /\s/	Any whitespace character
- /./	Any character except newlines
- /\b/	A word boundary
- /^/	Start of input
- /$/	End of input










