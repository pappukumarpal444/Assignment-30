// No-1: find out the elemnt of the array
const number = [45, 88, 77, 99, 55, 33, 22, 11]
const indexNumber = number.length;
console.log(indexNumber) 

// No-2: Uses of the .shift() [cut the first index]
const numberShipt = [45, 88, 77, 99, 55, 33, 22, 11]
numberShipt.shift()
console.log(numberShipt)

// No-3: Uses of the .Push() [join the new array in the last index]
const numberPush = [45, 88, 77, 99, 55, 33, 22, 11]
numberPush.push(100)
console.log(numberPush)

// No-4: Uses of the .unshift() [join the new array in the first index]
const numberUnshift = [45, 88, 77, 99, 55, 33, 22, 11]
numberUnshift.unshift(99)
console.log(numberUnshift)

// No-5: Uses of const variable
// const numbers = [45, 88, 12, 36, 9, 4]
// numbers = [99, 88, 77]//const variable diya update kora jai na
// console.log(numbers)


// No-6: Uses of let Variable
let numberl = [45, 88, 12, 36, 9, 4]
numberl = [99, 88, 77]//let variable diya update kora jai 
// console.log(numberl)

// No-7: Uses of object
const student = {
    name:'pappu',
    age:24,
    study:'BBA',
    like:'coding'
}
student.name='alok'          //object er khetra const varriable diyya update kora jai
console.log(student)

// No-8: Add number use of the function
function add(num1, num2){  
    const total = num1 + num2;  //paramiter a asa number duti jog korba abng notun variable a store krbo 
    return total  // store kora number return er madhoma function er bahira pathabo
}

const result = add(15,7);  //Argumet a thaka number function er paramiter k dhorba
console.log(result)

// No-9: find the defult value use of the function
function addTwo(num1, num2){  
    if(num2 == undefined){
        num2 = 10
    }
    const total = num1 + num2;   
    return total 
}

const resultTwo = addTwo(15); 
console.log(resultTwo)

// No-10:string er multiple line break 
const multiple = 'This is first line. \n'+
'This is second line \n'+
'This is third line \n'+
'This is fourt line'
console.log(multiple)


