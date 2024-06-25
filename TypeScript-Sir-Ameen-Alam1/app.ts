let SirZiaPromise = new Promise ( function(resolve, reject) {
    // resolve ("Passed with Mehmood Sweets!")
    resolve ("Passed")
    // reject ("Failed")
    // reject ("Failed - Chappal")
} )

// console.log(SirZiaPromise);

// Part 1
/* SirZiaPromise.then( function(response) {
    // console.log(response, " response");
    console.log(response, " response wala");
} ).catch( function(error) {
    // console.log(error);
    console.log(error, " rona");
} ) */

// Part 2
/* async function promiseStatus(){
    let response = await SirZiaPromise
    console.log(response);
}
promiseStatus(); */

// Part 3
async function promiseStatus(){
    try {
        let response = await SirZiaPromise
        console.log(response, " response");
    } catch(error){
        // console.log(error, " error");
    }
    // let response = await SirZiaPromise
    // console.log(response);
}
promiseStatus();