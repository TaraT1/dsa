//hashing

//pairs
//p: array; returns arr of unique pairs - any order.
//pairs(["a", "b", "c"]); // ->
// [
//    ["a", "b"],
//    ["a", "c"],
//    ["b", "c"]
// ]

const pairs = (elements) => {
  let result = []
  for(let i = 0; i < elements.length; i+=1) {
    for(let j = i+1; j < elements.length; j+=1) {
      result.push([ elements[i], elements[j] ])
    }
  } 
    return result
} 

//time: O(n * n/2) --> O(n^2)
//space: O(n^2)

//anagrams
//parameter: 2 strings, return bool if strings are anagrams
//anagrams('restful', 'fluster'); // -> true
//anagrams('abbcd', 'caddb') // -> false
//code: equal lengths, [i].includes(s2)
//count for each character
//hash map for each string
const anagrams = (s1, s2) => {
    const count = {}

    for(let char of s1) {
        if(!(char in count)) {
           count[char]  = 0
        } 
        count[char] += 1
    }
    //js: Can't use equality in js for objects. Checks for referencing same memory location, not contents of object. So iterate and reduce for s2
    for(let char of s2) {
        if(char in count) {
        count[char] -= 1 //decrementing char of s2 in s1's count
        } else {
        return false //if not decrement, char in s2 doesn't exist in s1
        }
    }
    for(let char in count) { //for...in: keys
        if (count[char] !== 0) {
            return false
        }
    }

    return true
}
anagrams('restful', 'fluster')

//Complexity
//n=string1 length
//m = string2 length
//time: O(n+m) //linear (multi-linear)
//space: ~O(n+m) //linear (multi-linear)

const anagrams2 = (s1, s2) => {
    const cnt = {} //could it be map?

    for(let char of s1) {
        if(!(char in cnt)) { //if character is not in count, add
            cnt[char] = 0
        } 
        cnt[char] += 1
    }

    for(let char of s2) {
        if(char in cnt) {
            cnt[char] =- 1
        } else {
            return false
        }
    }

    for(let char in cnt) {
        if(cnt[char] !== 0) {
            return false
        }
    }

    return true
}

// most frequent char
/**
 * Write a function, mostFrequentChar, that takes in a string as an argument. The function should return the most frequent character of the string. If there are ties, return the character that appears earlier in the string.

You can assume that the input string is non-empty.
 */

// Create count object to store char & count
//mostFreq - max value logic

const mostFreqentChar = (s) => {
    const count = {}
    
    for(let x of s ) {
        if(!(char in count)) {
            count[char] = 0
        }
        count[char] += 1
    }
    let most = null
    for(x of s) {
        if(most === null || count[char] > count[most]) {
            most = char
        }
    }
    return most
}

// mostFrequentChar('potato'); // -> 'o'
// mostFrequentChar('eleventennine'); // -> 'e'
// n = str length; time: O(n); space: O(n)