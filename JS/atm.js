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
    let pin = parseInt(document.getElementById("pinput").value);

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

    let pin = parseInt(document.getElementById('getAcct').value);
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
    //let acct = acctExist(pin);
    currentAcctIndex = parseInt(window.localStorage.getItem('currentAcctIndex'));

    let amount = parseInt(document.getElementById("withd").value);
    // if (account[currentAcctIndex].balance <= amount) {
    //     alert("Sorry, you do not have enough within your account!")
    // }
    // else (account[currentAcctIndex].balance = amount ) {
    bankAccounts[currentAcctIndex].balance -= amount;

    window.localStorage.setItem('bankAccounts', JSON.stringify(bankAccounts));

    document.getElementById("newBalance").innerHTML = bankAccounts[currentAcctIndex].balance
}
//}
//create a function to deposit money into the indexed account

function deposit() {
    //let acct =acctExist(pin from local storage); 
    currentAcctIndex = parseInt(window.localStorage.getItem('currentAcctIndex'));

    let addMoney = parseInt(document.getElementById("depo").value);

    bankAccounts[currentAcctIndex].balance += addMoney;

    window.localStorage.setItem('bankAccounts', JSON.stringify(bankAccounts));

    document.getElementById("updateBalance").innerHTML = bankAccounts[currentAcctIndex].balance
}
//create a function to check the balance of the currentAccount

function getBalance() {

    currentAcctIndex = parseInt(window.localStorage.getItem('currentAcctIndex'));

    document.getElementById("currentBalance").innerHTML = bankAccounts[currentAcctIndex].balance
}


//function 6 Change pin of the bank account
function changePin() {

    currentAcctIndex = parseInt(window.localStorage.getItem('currentAcctIndex'));

    let oldAcctIndex = currentAcctIndex;


    function removePIN(index) {
        bankAccounts.splice(index, 1);
        window.localStorage.setItem("bankAccounts", JSON.stringify(bankAccounts));
        currentAcctIndex = parseInt(window.localStorage.getItem('currentAcctIndex'));
    }



    let pin = parseInt(document.getElementById('changePin').value);
    let newPin = {

        "pin": pin,
        "balance": bankAccounts[currentAcctIndex].balance
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




//NOTES FOR IMPROVMENTS