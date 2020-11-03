/* I need to create a program that simulates a functional ATM with the following abilities */


// Creation of account with unqiue pin
//function 1 
//I need to create a function that allows the user to create a bank account with a unqiue pin


let creds = {
    uName: " ", //make these prompts or inputs? if inputs what other code would I need to input for this to work?
    //document.write(new uName() == new pin());???
    pin: Number(" ")
};

function uName(); { return creds; }
//function uName() returns object creds
function pin(); { return creds; }
//function pin() returns object creds



// PIN Authorization for account holders
//function 2 - for in loop I need to use a for loop

function pinAuth() {
    if (let myKey in pinAuth) {
        return false;
    }
    return true;
}


// Deposit money into account and print new available balance
//function 3 

function Accumulator(startingValue) {
    this.value = startingValue;

    this.read = function() {
        this.value += +prompt('How much to add?', 500);
    };

}
let accumulator = new Accumulator(500); // initial value (CURRENT BANK ACCOUNT BALANCE?)


accumulator.read(); // adds the user-entered value

alert(accumulator.value); // shows the sum of these values


// Withdrawal money from account and print new available balance
//function 4
function A() {
    //creating a constructor function called Calculator
    //this = {...}

    this.withdrawal = function() {
        this.a = -prompt('Starting Balance', 0);
        //we are entering the first value of the read function
        this.b = -prompt('Withdrawal amount?', 0);
        //we enter the second value of the read function
    };
    //this is creating the empty object so if we compare how we put together our calculator in object methods. We can do this the same way except we are going create functions with each portion instead. 
    this.balance = function() {
        return this.b - this.a;
    };
}

let calculator = new A();
calculator.withdrawal();

alert("Balance=" + calculator.balance());


// Balance Inquery
//function 5
/*function BalanceInq() {
    call back to the previous functions (Withdrawls function returns a balance value)
    ...some code here
}
*/

// Change pin of the bank account
//function 6
function myFunctionName(parameter) {
    for (let key in object) {
        if (typeof object[key] == "number") {
            then object[key(that is a number)] *= 2;
        }
    }
}

//we are going to create a for in function that allows for the user to input a 4 digit pin(if any more digits than 4 are input it should alert the user with an invalid input option)


// USE LOCAL STORAGE FOR ACCESS ACROSS SESSIONS
//function 7
//read the debugging and exploring of the color game to view how we set local storage to session storage and reverse engineer that to make it where each input it kept throughout multiple session