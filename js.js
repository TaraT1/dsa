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

