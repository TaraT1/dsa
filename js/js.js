//max, prime, fizzbuzz

/*Write func maxValue that takes in array of nums and returns the largest num in array. Assume array is non-empty. Solve w/o using buit-in methods
*/

const maxValue = (nums) => {
    let max = -1000
    for(let i = 0; i < nums.length; i++) {
        if(max < nums[i]) {
            max = nums[i]
        }
        } return max
    }

//Alvin's soln
const maxValue0 = (nums) => {
    let max = -Infinity // guaranteed to be less than any other num
    for(let num of nums) { //iterates through every element and not indices
        if(num > max) {
            max = num
    }
    }
    return max
    }

maxValue([4, 7, 2, 8, 10, 9]); // -> 10
maxValue([-5, -2, -1, -11]); // -> -1
maxValue([1000, 8]); // -> 1000

//n = length of array
//time complexity: 0(n)
//space complexity: 0(1)

//longest word
/*Write func longestWord that takes in array of words and returns the longest word in the array. If there is a tie, return the word that appears last. Assume sentence is non-empty.
*/
const longestWord = (sentence) => {
    const words = sentence.split(" ") // n iteration
    let longest = ""

    for(let word of words) { // n
        if(word.length >= longest.length) { //comparing words and their lengths
            longest = word //>= accounts for tie
        }
    }
}

longestWord("what a wonderful world"); // -> 'wonderful'
longestWord("have a nice day"); // -> 'nice'

//n = number of words in sentence
//time = O(n+n) = O(2n) = O(n)
//space = O(n)

//n=length of sentence

//isPrime
/*Write func isPrime that takes in a number and returns true if the num is prime. A prime num is only divisible by 1 and itself. Assume num is a positive integer.
*/

const isPrime = (n) => {
  // Composite number is divisible by number up to its sqrt. if n is not divisible by more than 2 distinct numbers (1 & itself), it is prime
  const maxDiv = Math.sqrt(n)
  
  if(n < 2) {
    return false
  }

  for(let i = 2; i <= maxDiv; i+= 1){
    if(n % i === 0) {
      return false
    }
  }
  return true
}

// time = O(sqrt(n))
// space = O(1)

isPrime(2); // -> true
isPrime(2017); // -> true


module.exports = {
  isPrime,
};

//structy soln
const isPrime = (n) => {
  if(n < 2) {
    return false
  }
  
  for(let i = 2; i < n; i += 1) {
    if(n % i === 0) {
      return false
    }
  } 
  return true
};
time = O(n)
space = O(1)

//fizzbuzz
const fizzBuzz = (n) => {//not work - needed result.push()
  let result = []

  for(let i = 1; i <= n; i++ ) {
    if(i % 3 === 0 && i % 5 === 0) {
      result = "fizzbuzz"
    }
    else if(i % 3 === 0) {
      result = "fizz"
    }
    else if( i % 5 === 0) {
      result = "buzz"
    }
    else result = i
  } 
  return result
};

module.exports = {
  fizzBuzz,
};

const fizzBuzz = (n) => {
  let result = []

  for(let i = 1; i <= n; i++ ) {
    if(i % 3 === 0 && i % 5 === 0) {
      result.push("fizzbuzz")
    }
    else if(i % 3 === 0) {
      result.push("fizz")
    }
    else if( i % 5 === 0) {
      result.push("buzz")
    }
    else result.push(i)
  } 
  return result
};

module.exports = {
  fizzBuzz,
};

//time: O(n)
//space: O(n)
