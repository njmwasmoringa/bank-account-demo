const accounts = [
    {
        name:"Prince",
        identification: 123131,
    },
    {
        name:"Abdul",
        identification: 342323,
    },
    {
        name:"Lucy",
        identification: 55567567,
    }
];

function find( func ){ // accepts a function as an argument
    console.log('calling the passed function')
    const result = func({
        name:"Abdul",
        identification: 342323,
    });

    console.log(result);
}

const findAccount = function(currentAccount){
    console.log("I have been called by find")
    const identification = 23434234;
    if(currentAccount.identification == identification){
        return true;
    }
    else{
        return false;
    }
}

find(findAccount);