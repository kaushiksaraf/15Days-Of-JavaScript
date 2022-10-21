// Exercises: Level 1
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]



// Explain the difference between forEach, map, filter, and reduce.
/*
arr.forEach()= The forEach() method executes a function on each array element.it does not return any value.
arr.map()=The map() method creates a new array with provided function on each array element
arr.filter()=The filter() method creates a part of original array based on the condition given in the function on each array element
arr.reduce()= The reduce() method  returns the sum of all the elements in an array.
*/

// Define a callback function before you use it in forEach, map, filter or reduce.


console.log('A callback function is a function that is passed as an argument to another function.')

// Use forEach to console.log each country in the countries array.
countries.forEach((country)=> console.log(country))




// Use forEach to console.log each name in the names array.
names.forEach((name)=> console.log(name))
// Use forEach to console.log each number in the numbers array.
numbers.forEach((number)=> console.log(number))

// Use map to create a new array by changing each country to uppercase in the countries array.
const upperCaseCountry=countries.map((country)=>{
   console.log(country.toUpperCase())
   return country.toUpperCase()
})
// Use map to create an array of countries length from countries array.
const countryLength =countries.map((country)=> 
{console.log(country.length)
return country.length
})
console.log(countryLength)

// Use map to create a new array by changing each number to square in the numbers array
const sqNumbers =numbers.map((item)=> {
console.log(item * item)
return item * item
})
                                                                                                                                                                                                                                                                                                                                                                                     
console.log(sqNumbers)


// Use map to change to each name to uppercase in the names array
const upperCaseName = names.map((item) => item.toUpperCase())
console.log(upperCaseName)
 


// Use map to map the products array to its corresponding prices.

const getProduct = products.map((item)=> {

  return item.product +'-'+ item.price})
  console.log(getProduct)

// Use filter to filter out countries containing land.
const filterLand = countries.filter((country) =>
country.includes('land')
)
console.log(filterLand)
                                                                                                                                                                                                                                                                                          


// Use filter to filter out countries having six character.
const filterSixLetter = countries.filter((country) =>
country.length === 6
)
console.log(filterSixLetter)

// Use filter to filter out countries containing six letters and more in the country array.
const filterByCharLength = countries.filter((country) =>
country.length >= 6
)
console.log(filterByCharLength)

// Use filter to filter out country start with 'E';
const filterByE = countries.filter((country) =>
country.startsWith('E')
)
console.log(filterByE)


// Use filter to filter out only prices with values.
const filterPrices = products.filter((item) =>
item.price
)
console.log(filterPrices)


// Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
const getStringLists = (arr)=>{
let strArr = arr.toString()
return strArr


}

// Use reduce to sum all the numbers in the numbers array.

const sum = numbers.reduce((acc, cur) => acc + cur, 0)

console.log(sum)

// Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries

const concatcountry=countries.reduce((acc,curr)=> acc= acc +","+ curr)


console.log(concatcountry)


// Explain the difference between some and every
/* The some() method tests whether at least one element in the array passes the test implemented by the provided function.it returns a boolean.
The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

*/


// Use some to check if some names' length greater than seven in names array
const checkNames= names.some((item)=> item.length > 7)
console.log(checkNames)

// Use every to check if all the countries contain the word land
const checkland =countries.every((item)=> item.includes('land') )


// Explain the difference between find and findIndex.
/*The find() method returns the first element in the provided array that satisfies the provided testing function.
The findIndex() method returns the index of the first element in an array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned
*/

// Use find to find the first country containing only six letters in the countries array
const findcountry = countries.find((item)=> item.length === 6 )
console.log(findcountry)


// Use findIndex to find the position of the first country containing only six letters in the countries array
const findCountryByIndex = countries.findIndex((item)=> item.length === 6 )
console.log(findCountryByIndex)


// Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.

const findCountryByname = countries.findIndex((item)=> item === 'Norway')
console.log(findCountryByname)
// Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.

const findCountryName = countries.findIndex((item)=> item === 'Russia')
console.log(findCountryName)

