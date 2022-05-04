// Question 1: Write a program that prints the numbers from 1 to 100.
// But for multiplies of three print "Fizz" instead of the number and for the multiplies of five print "Buzz".
// For numbers which are multiplies of both three and five print "FizzBuzz"

(function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    let str = '';
    if (i % 3 == 0) {
      str += 'fizz';
    }
    if (i % 5 == 0) {
      str = str + 'Buzz';
    }
    console.log(i + str);
  }
})();

// Question 2: Draw two squares of width 50px side by side;
// each square should have a circle in the center with radius of 10px
// distance between two square would be 10px

// Question 3: find the greatest common diviser of two numbers
// example: 4, 6 == 2
// example: 2, 3 == 1

/* 5,15 => 5 */

function getCD(x, y) {
  let min = Math.min(x, y);
  let max = min === x ? y : x;
  if (max % min === 0) {
    return min;
  } else {
    let mid = Math.floor(max / 2); //3
    let _divisor = [];
    for (let i = mid; i > 0; i--) {
      if (max % i === 0 && min & (i === 0)) {
        //0 &&
        return i;
      }
    }
    return _divisor;
  }
}

alert(getCD(2, 4));

// Question 4
// In the shouldComponentUpdate method
// there I would have previous props and current props
// then I can check and compare if the score is not what it was then only I will update
// else i will return false
// I can use getDerivedStateFromProps

// 1) shouldComponentUpdate method
// 2) getDerivedstate

// I can use getDerivedStateFromProps

// Question 5

// n kids are sitting in a circle
// k toys available to distribute
// i position to start from.

// 3, 7, 1 => 2

function getLK(n, k, i) {
  if (k > n) {
    return i + (k % n) - 1;
  } else {
    return i + n;
  }
}

alert(getLK(3, 7, 1));
