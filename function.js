function myFunc (p1, p2) { //parameters
    return p1 * p2;
}

let result = myFunc(10, 50) //arguments 
console.log(result);


function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit - 32)
}

let toCelsiusResult = toCelsius(77);
console.log(toCelsiusResult);

// local Variable

//Local variables are created when function starts and deleted when function completed.

function localVariableFunction () {
    var myCar = 'Maruti'; //local variable
    console.log(myCar) // Accessible here
}
//myCar is not accessable here.
// console.log(myCar); // Uncaught ReferenceError: localVariable is not defined


//legacy var :

function legacyVar () {
    if (true) {
        var x = 'Joy Das'; // Function scoped
    }
    console.log(x); // Accessible here
}

legacyVar(); // Output: Joy Das