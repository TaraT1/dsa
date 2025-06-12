//Example
const countdown = (n) => {
    if(n===0 ) {
        return; 
    }
    console.log(n) //5 4 3 2 1
    countdown(n-1)
    console.log(n) //1 2 3 4 5 
}
countdown(5)

//sum numbers recursive
const sumNumbersRecursive = (numbers) => {
    if(numbers.length === 0) {
        return 0
    }
    return numbers[0] + sumNumbersRecursive(numbers.slice(1))
}

sumNumbersRecursive([5,2,9,10]) // 26
sumNumbersRecursive([10]) // 10
