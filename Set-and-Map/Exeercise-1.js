// Exercises:Level 1
const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]

//create an empty set

let empSet =new Set()
console.log(empSet)

//Create a set containing 0 to 10 using loop

let numSet= new Set()

    for(let i=0;i< 11 ;i++){
        numSet.add(i)
        
    }
  
    console.log(numSet)


//Remove an element from a set
numSet.delete(0)
console.log(numSet)


//Clear a set
numSet.clear()
console.log(numSet)
//Create a set of 5 string elements from array
let arr=["Goku","Vegeta","Gohan","Trunks","Pan"]
const setOfNames= new Set(arr)
for(const name of setOfNames){
    console.log(name)
}


//Create a map of countries and number of characters of a country

const countries = ['Finland', 'Sweden', 'Norway']
const setCountry= new Set(countries)

const newArr=[]
const count={}

for(const l of setCountry){
    const countCountryLetters=countries.filter((each)=> each===l)
    console.log(countCountryLetters)
   
    newArr.push({country:l,count:countCountryLetters.toString().length})
}
console.log(newArr)