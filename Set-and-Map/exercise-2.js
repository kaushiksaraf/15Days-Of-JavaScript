//Exercises:Level 2

const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const c=[...a,...b]

// Find a union b
const arr1= new Set(a)
const arr2=new Set(b)
const arr3=new Set(c)


console.log(arr3)





//Find a intersection b
const A= new Set(a)
const B = new Set(b)

const cArr=a.filter((num)=> B.has(num))
const C = new Set(cArr)
console.log(C)



//Find a with b
const cArr2=b.filter((num)=> A.has(num))
const C2 = new Set(cArr)
console.log(C2)
