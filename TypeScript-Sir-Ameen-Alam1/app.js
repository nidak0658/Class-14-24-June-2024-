"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let SirZiaPromise = new Promise(function (resolve, reject) {
    // resolve ("Passed with Mehmood Sweets!")
    resolve("Passed");
    // reject ("Failed")
    // reject ("Failed - Chappal")
});
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
function promiseStatus() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let response = yield SirZiaPromise;
            console.log(response, " response");
        }
        catch (error) {
            // console.log(error, " error");
        }
        // let response = await SirZiaPromise
        // console.log(response);
    });
}
promiseStatus();
