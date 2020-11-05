/* I need to create a program that simulates a functional ATM with the following abilities */

//function 1 

//bank accounts that are already exisiting

let currentAcctIndex;

let bankAccounts = [];


function getAccount() {
    let pin = parseInt(document.getElementById("pinput").value);
    for (let i = 0; i < bankAccounts.length; i++) {
        if (bankAccounts[i].pin === pin) {
            document.getElementById("account").innerHTML = bankAccounts[i].balance;
            currentAcctIndex = i;

            console.log(JSON.parse(window.localStorage.getItem('bankAccounts')));
            return;
            //  return bankAccounts[i]; 
        }

    }
    //I need to create an option that allows the user to create a bank account with a unqiue pin
    alert("Invaliad PIN!")
    if (confirm("Would you like an account?")) {
        window.location = "atm.html";
    }

}

function createAccount() {
    let pin = parseInt(document.getElementById('getAcct').value);
    let newAccount = {
        "pin": pin,
        "balance": 0
    };


    bankAccounts.push(newAccount);


    alert('Your Account Has Been Created!')
    window.localStorage.setItem('bankAccounts', JSON.stringify(bankAccounts));


    if (confirm("Would like access your account?")) {
        window.location = "index.html"

    }
    return;
}

//create a function to withdraw money into the indexed account

function withdraw() {
    let amount = parseInt(document.getElementById("withd").value);
    bankAccounts[currentAcctIndex].balance -= amount;
    document.getElementById("newBalance").innerHTML = bankAccounts[currentAcctIndex].balance
}
//create a function to deposit money into the indexed account

function deposit() {
    let addMoney = parseInt(document.getElementById("depo").value);
    bankAccounts[currentAcctIndex].balance += addMoney;
    document.getElementById("updateBalance").innerHTML = bankAccounts[currentAcctIndex].balance
}
//create a function to check the balance of the currentAccount

function getBalance() {

    document.getElementById("currentBalance").innerHTML = bankAccounts[currentAcctIndex].balance
}


//function 6 Change pin of the bank account
/*
function myFunctionName(parameter) {
    for (let key in object) {
        if (typeof object[key] == "number") {
            then object[key(that is a number)] *= 2;
        }
    }
}*/

//we are going to create a for in function that allows for the user to input a 4 digit pin(if any more digits than 4 are input it should alert the user with an invalid input option)


// USE LOCAL STORAGE FOR ACCESS ACROSS SESSIONS
//function 7
//read the debugging and exploring of the color game lab to view how we set local storage to session storage and reverse engineer that to make it where each input it kept throughout multiple session

// myStorage = window.localStorage;

// window.localStorage.setItem('bankAccounts', JSON.stringify(bankAccounts));

// console.log(JSON.parse(window.localStorage.getItem('bankAccounts')));