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
    //js: Can't use equality in js for objects. Checks for referencing same memory location, not contents of object. So iterate and decrement for s2
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
//time: O(n+m+n) -->O(n) //linear (multi-linear)
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
    //create count object
    const count = {}
    for(let x of s ) {
        if(!(char in count)) {
            count[char] = 0
        }
        count[char] += 1
    }
    //determine earliest tie
    let most = null
    for(let x of s) {
        if(most === null || count[char] > count[most]) {//what if want last tie
            most = char
        }
    }
    return most
}

// mostFrequentChar('potato'); // -> 'o'
// mostFrequentChar('eleventennine'); // -> 'e'
// n = str length; time: O(n); space: O(n)

//pair sum
// takes in arr & target sum; return arr of pair of unique indices;   
//brute force with nested loops
const pairSum = (numbers, targetSum) => { 
  for(let i = 0; i < numbers.length; i++) {
    for(let j = i + 1; j < numbers.length; j++) {
      if(numbers[i] + numbers[j] === targetSum) {
        return [i,j] //return indices
      }
    }
  }
};
//Examples: pairSum([6, 4, 2, 8 ], 12); // -> [1, 3]
/**
const numbers = [];
for (let i = 0; i <= 30000; i += 1) {
  numbers.push(i);
}
pairSum(numbers, 59999); // -> [ 29999, 30000 ] 
*/

//time: O(n^2); space: O(n)

//pairSum with hashing ???
const pairSum = (numbers, targetSum) => {
    const prevNums = {}

    for(let i = 0; i < numbers.length; i += 1) {
        const num = numbers[i]
        const complement = targetSum - num

        //is complement in object prevNums
        if(complement in prevNums) {
            return [i, prevNums[complement]] //key: element of arr; val: index
        }
        prevNums[num] = i
    }
}
//time: O(n); space: O(n)

//pair product
//parameter: arr of numbers & target product; return unique indices whose elements multiply to given target. 
/**
 * pairProduct([3, 2, 5, 4, 1], 8); // -> [1, 3]
 * pairProduct([4, 6, 8, 2], 16); // -> [2, 3]
 */

//brute force: nest loops i, j = i+1; if numbers[i] * numbers[j] ==== target prod, return [i,j]
const pairProduct = (numbers, targetProduct) => {
  for(let i = 0; i < numbers.length; i += 1) {
    for(let j = i + 1; j < numbers.length; j+= 1) {
      if(numbers[i] * numbers[j] === targetProduct) {
        return [i,j]
      }
    }
  }
}
//time: O(n^2); space: O(1)

//hash
const pairProductHash = (numbers, targetProduct) => {
    const prevNums = {}
    for(let i = 0; i < numbers.length; i += 1) {
        const num = numbers[i]
        const complement = targetProduct / num

        if(complement in prevNums) {
            return [i, prevNums[complement]]        
        }
        prevNums[num] = i //constructs hash map - key: element, val: index
    }
}

//time: 0(n); space: O(n) (insert and lookup are constant time in hash map)

//intersection
//parameter: 2 arrays; return new array with elements in both arrays
//intersection([4, 2, 1, 6], [3, 6, 9, 2, 10]); // -> [2, 6]

// brute: nested loops
 const intersection = (a, b) => {
  // todo
  const result = []
  for(let x of a) {
    if(b.includes(x)) {
      result.push(x)
    }
  }
  return result
};

const intersection = (a, b) => {
  const result = []
  
  const items = new Set
  
  for(let item of a) {
     items.add(item) 
    }
  
  for(let ele of b) {
    if(items.has(ele)){
      result.push(ele)
    }
  }

 return result
};

