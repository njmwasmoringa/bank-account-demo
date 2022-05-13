// defined the account
const accountName = "Lucy";
const accountNumber = 12312312312312;
let currentBalance = 0;

let accounts = [
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
let transactions = [];


/* deposit(12312312312312, 10000);
deposit(12312312312312, 50000);
deposit(12312312312312, 20000);

withdraw(12312312312312, 10000); */

creatingAccount("Julius", 342323, 20384023);


//Create an acount
function creatingAccount(name, identification, phone){
    //check if this person has an existing bank account
    /* const findAccount = function(currentAccount){
        return currentAccount.identification == identification;
    } */
    const existingAccount = accounts.find((currentAccount)=>currentAccount.identification == identification);
    console.log(existingAccount);
}

function deposit(account_number, amount) {
    // search using the account
    // enter the account that you deposit

    //validate the existence of the account
    if (account_number != accountNumber) {
        console.warn("The account number you provided does not exist");
        return; // this is the end or that process
    }

    // validate if the amount valid
    if (amount <= 0 || typeof (amount) != 'number') {
        console.warn("Sorry you have to give us some cash money");
        return;
    }

    //change the current balance
    currentBalance += amount;

    // Tracking the transaction
    const transaction = {
        accountNumber: account_number,
        amount,
        date: new Date(), /// this will provide the current date
        transactionType: 'Deposit'
    }
    transactions.push(transaction);

    console.log(`${amount} has been credited to you account, your new balance is ${currentBalance}`)

}

function withdraw(account_number, amount) {
    // search using the account
    // enter the account that you deposit

    //validate the existence of the account
    if (account_number != accountNumber) {
        console.warn("The account number you provided does not exist");
        return; // this is the end or that process
    }

    // validate if the amount valid
    else if(amount <= 0 || typeof (amount) != 'number') {
        console.warn("Sorry you have to give us some cash money");
        return;
    }

    // does have the amount being withdrawn
    else if(amount > currentBalance){
        console.warn(`You do not have enough money in your account to withdraw ${amount}`);
        return;
    }

    //change the current balance
    currentBalance -= amount;

    // Tracking the transaction
    const transaction = {
        accountNumber: account_number,
        amount,
        date: new Date(), /// this will provide the current date
        transactionType: 'Withdraw'
    }
    transactions.push(transaction);

    console.log(`${amount} has been credited to you account, your new balance is ${currentBalance}`)
}

console.table(transactions);



// const existingAccount = accounts.find(findAccount);