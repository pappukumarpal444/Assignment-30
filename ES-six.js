// No-1: ES6 arrow function
const arrowFunction = (num1, num2, num3) => num1 + num2 + num3
const sum = arrowFunction(10,5,5)
console.log(sum)

// No-2: ES6 big array function
const doMath = (x,y) => {
    const plus = x + y;
    const minus = x - y;
    const multi = plus * minus;
    return multi
    }
    const result = doMath(15,5)
    console.log(result)

    //  No-3: ES6 Find out the large array
    // (...)=Spread oparator
    const numberArray = [45, 88, 77, 99, 55, 33, 22, 11]
    const largeArray = Math.max(...numberArray)
    console.log(largeArray)

  // No-4: Breckline useing by ES6 Mathod:
const newMultiple = `This is first ES6.
This is second ES6.
This is third ES6
This is forth ES6`
console.log(newMultiple)

//No-5: Add multiple variable using by ES6
const firstName = 'Pappu';
const secondSecond = 'Kumar';
const place = 'Rajshahi';

const detail = `This is ${firstName} ${secondSecond}.I am from ${place}`
console.log(detail)