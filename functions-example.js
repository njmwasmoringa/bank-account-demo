
//named function
function deposit() {
    /** all the activities receive and credit to account */
    return 100000;
}

const deposit1 = function () { //void
    /** all the activities receive and credit to account */
    console.log("Am an unnonimous function assigned as variable expression");
}

//one way of defining arrow function
const arrawFunction = (num1, num2) => num1 === num2;

// other way of defining arrow function do perfome some complex computation
const fibanachiFunction = (num1, num2) => {
    let theSequence = [];

    // add first 2 numbers
    theSequence.push(num1, num2);

    // get the first sequence and add to the arrary
    let nextNum = num1 + num2;
    theSequence.push(nextNum);

    // get the second sequence and add to the arrary
    let secondLastItem = theSequence[theSequence.length - 2];
    nextNum = nextNum + secondLastItem;
    theSequence.push(nextNum);

    // get the third sequence and add to the arrary
    secondLastItem = theSequence[theSequence.length - 2];
    nextNum = nextNum + secondLastItem;
    theSequence.push(nextNum);

    // get the fourth sequence and add to the arrary
    secondLastItem = theSequence[theSequence.length - 2];
    nextNum = nextNum + secondLastItem;
    theSequence.push(nextNum);

    // get the fifth sequence and add to the arrary
    secondLastItem = theSequence[theSequence.length - 2];
    nextNum = nextNum + secondLastItem;
    theSequence.push(nextNum);

    console.table(theSequence);

    /// loop

}

fibanachiFunction(0, 1);

//use of arrow function and array map method to achieve the fibanchi sequence
// alot of improvement need
const ourArrayPlaceholders = Array(5).fill(0);
//create finachi array of the above array
const fibanchiSequenceofNumber = ourArrayPlaceholders.map((num, indexOfArray)=>{
    if(indexOfArray == 0){
        ourArrayPlaceholders[indexOfArray] = num;
        return num;
    }
    else if(indexOfArray == 1){
        ourArrayPlaceholders[indexOfArray] = 1;
        return 1;
    }
    else{
        //next sequence                     = second last in the array              + last in the array
        ourArrayPlaceholders[indexOfArray] = ourArrayPlaceholders[indexOfArray - 2] + ourArrayPlaceholders[indexOfArray - 1];
        return ourArrayPlaceholders[indexOfArray - 2] + ourArrayPlaceholders[indexOfArray - 1];
    }
});
console.table(fibanchiSequenceofNumber)
