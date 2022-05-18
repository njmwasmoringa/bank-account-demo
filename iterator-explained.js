
const listOfNames = ['Adam', 'Mohammed', 'Jacob', 'Prince', 'Julius'];

//search for julius in listOfname

function compairNames(name, anotherName){
    return name == anotherName;
}

function compairNamesWithCharacter(name, characters){
    return name.indexOf(characters) > -1;
}

function findADriverByName(aname){
    for(let i=0; i<listOfNames.length; i++){
        const nameInArray = listOfNames[i];
        const isSame = compairNames(aname, nameInArray);
        console.log(nameInArray, isSame);
    }
}

function findAllDriverWithThisCharacters(characters){
    const result = listOfNames.filter((nameInArray)=>{ 
        return compairNamesWithCharacter(nameInArray, characters);
     });

    /* for(let i=0; i<listOfNames.length; i++){
        const nameInArray = listOfNames[i];
        const isSame = compairNamesWithCharacter(nameInArray, characters);
        console.log(nameInArray, isSame);
    } */
    console.table(result);
}

// findAllDriverWithThisCharacters('am');

const listOfProducts = [
    {
        name:'Bread',
        price: 10
    },
    {
        name:'Milk',
        price: 15
    },
    {
        name:'Sugar',
        price: 30
    },
    {
        name:'Tea Leaves',
        price: 12
    }
];

let totalSpent = 0;
for(let product of listOfProducts){
    //at index 0 > 0 += 10
    //at index 1 > 10 += 15
    //at index 2 > 25 += 30
    //at index 3 > 55 += 12 == 67
    totalSpent += product.price;
}
// console.log(totalSpent);


// this is the function used by reduce to get the total
function addPrice(initialValue, product){
    console.log(initialValue + '+' + product.price)
    return initialValue + product.price;
}

// Calling / Invoking the function
addPrice(0, { name:'Break', price:0 });

let newTotalSpent = 0;
//implementation of the reduce iterator
newTotalSpent = listOfProducts.reduce(addPrice, newTotalSpent);

/// manually finding the total (not effective)
/* newTotalSpent = addPrice(newTotalSpent, listOfProducts[0]);
console.log(newTotalSpent);
console.log('------------------------');

newTotalSpent = addPrice(newTotalSpent, listOfProducts[1]);
console.log(newTotalSpent);
console.log('------------------------');

newTotalSpent = addPrice(newTotalSpent, listOfProducts[2]);
console.log(newTotalSpent);
console.log('------------------------'); */

console.log(newTotalSpent);



/* const newTotalSpent = listOfProducts.reduce((initialValue, product)=>{
    //at index 0 > initialValue = 0 and product = Bread
    //at index 0 > initialValue = 10 and product = Milk
    //at index 0 > initialValue = 35 and product = Sugar
    //at index 0 > initialValue = 55 and product = Tea Leaves
    return initialValue + product.price;
}, 0); */

// console.log(newTotalSpent);