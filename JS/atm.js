/* I need to create a program that simulates a functional ATM with the following abilities */

//function 1 

//bank accounts that are already exisiting

let currentAcctIndex;
myStorage = localStorage;
let bankAccounts = [];

if (window.localStorage["bankAccounts"] !== undefined) {
    bankAccounts = JSON.parse(window.localStorage.getItem('bankAccounts'));
}


function getAccount() {
    document.getElementById("newPin").style.display = "block";
    let pin = parseFloat(document.getElementById("pinput").value);

    for (let i = 0; i < bankAccounts.length; i++) {

        if (bankAccounts[i].pin === pin) {
            document.getElementById("account").innerHTML = bankAccounts[i].balance;
            currentAcctIndex = i;
            window.localStorage.setItem('currentAcctIndex', i);



            return;
            //  return bankAccounts[i]; 
        }

    }
    //I need to create an option that allows the user to create a bank account with a unqiue pin
    alert("Invaliad PIN!")

    if (confirm("Would you like to create an account?")) {
        window.location = "index.html";
    }

}

function createAccount() {

    let pin = parseFloat(document.getElementById('getAcct').value);
    let newAccount = {

        "pin": pin,
        "balance": 0
    };

    for (let i = 0; i < bankAccounts.length; i++) {

        if (bankAccounts[i].pin === pin) {
            alert('You already have an account!');

            if (confirm("Would like access your account?")) {
                window.location = "atm.html"
            }

            return;
        }
    }


    bankAccounts.push(newAccount);
    window.localStorage.setItem('bankAccounts', JSON.stringify(bankAccounts));

    alert('Your Account Has Been Created!')

    if (confirm("Would like access your account?")) {
        window.location = "atm.html"
    }
    return;
}

//create a function to withdraw money into the indexed account

function withdraw() {

    currentAcctIndex = parseFloat(window.localStorage.getItem('currentAcctIndex'));

    if (confirm("This ATM charges $4.95 per transaction.")) {
        message = "Okay I guess!";
    } else {
        return;
    }

    //Amount must be increments of $20 max of $200
    //for (x = 0; x < 200; x ++) {
    // if x  < $200 let it happen
    //else NO }


    let amount = parseFloat(document.getElementById("withd").value);

    if (amount <= 200 && (amount % 20 === 0) && (amount < bankAccounts[currentAcctIndex].balance.toFixed(2))) {
        bankAccounts[currentAcctIndex].balance -= amount + 4.95;

        window.localStorage.setItem('bankAccounts', JSON.stringify(bankAccounts));

        document.getElementById("newBalance").innerHTML = bankAccounts[currentAcctIndex].balance.toFixed(2)
    } else {
        alert('The max limit is $200 and must be increments of $20!')
    }

    // bankAccounts[currentAcctIndex].balance -= amount;


}

//create a function to deposit money into the indexed account

function deposit() {
    //let acct =acctExist(pin from local storage); 
    currentAcctIndex = parseFloat(window.localStorage.getItem('currentAcctIndex'));

    if (confirm("This ATM charges $4.95 per transaction.")) {
        message = "Okay I guess!";
    } else {
        return;
    }

    let addMoney = parseFloat(document.getElementById("depo").value);

    if (addMoney <= 200 && (addMoney % 20 === 0) && (addMoney != 0)) {
        bankAccounts[currentAcctIndex].balance += addMoney - 4.95;

        window.localStorage.setItem('bankAccounts', JSON.stringify(bankAccounts));

        document.getElementById("updateBalance").innerHTML = bankAccounts[currentAcctIndex].balance.toFixed(2)
    } else {
        alert('The max limit is $200 and must be increments of $20!')
    }

    // bankAccounts[currentAcctIndex].balance += addMoney;

}
//create a function to check the balance of the currentAccount

function getBalance() {

    currentAcctIndex = parseFloat(window.localStorage.getItem('currentAcctIndex'));

    document.getElementById("currentBalance").innerHTML = bankAccounts[currentAcctIndex].balance.toFixed(2)
}


//function 6 Change pin of the bank account
function changePin() {

    currentAcctIndex = parseFloat(window.localStorage.getItem('currentAcctIndex'));

    let oldAcctIndex = currentAcctIndex;


    function removePIN(index) {
        bankAccounts.splice(index, 1);
        window.localStorage.setItem("bankAccounts", JSON.stringify(bankAccounts));
        currentAcctIndex = parseFloat(window.localStorage.getItem('currentAcctIndex'));
    }

    let pin = parseFloat(document.getElementById('changePin').value);
    let newPin = {

        "pin": pin,
        "balance": bankAccounts[currentAcctIndex].balance.toFixed(2)
    };
    removePIN(oldAcctIndex);
    for (let i = 0; i < bankAccounts.length; i++) {

        if (bankAccounts[i].pin === pin) {
            alert('You already have an account!');

            if (confirm("Would like access your account?")) {
                window.location = "atm.html"
            }

            return;
        }
    }


    bankAccounts.push(newPin);
    window.localStorage.setItem('bankAccounts', JSON.stringify(bankAccounts));

    alert('Your PIN Has Been Changed!')

    if (confirm("Would like access your account?")) {
        window.location = "atm.html"
    }
    return;
}

// function displayDate() {
//     document.getElementById("showDate").innerHTML = new Date();
// }


//NOTES FOR IMPROVMENTS
// Create a function to check the validity of the transaction

// function transactionValid(amount){
//     return (amount <= 200 && (amount % 20 === 0));
// }