## js
- for(let num of nums) iterates through every element (and not indices)
- for(num in nums) - operates on objects

## Big-O Notation
- what
    - performance
    - how performance scales with input size
    - approximation  
- why
    - can compare performance of algos
    - doesn't rely on environment
- how to simplify
    - drop constant factors O(4n) --> O(n)
    - drop smaller terms in sum
        - O(n + n^4 +n^2) --> O(n^4)
        - O(n^4 - n^3) --> O(n^4)
        - O(4n^2 + n + 5) --> O(n^2)
        - O(n^2 / 2 + 900) --> O(n^2)
### Performance
- worse
    - O(n!): 8! = 8x7x6...x1 = 40,320 (factorial)
    - O(c^n): O(2n), O(3n) (exponential) (c is constant)
    - O(n^c): O(n^2), O(n^3) (polynomial)
    - O(n): linear
    - O(log(n)): log(32)
    - o(1): constant - performance does not scale with input size
- better

    - O(2^n + n^10) ---> O(2^n) - exponential is worse than polynomial

## Hashing
js: object; python: dictionary
- O(n^2) --> O(n)