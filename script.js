/* FUNCTION main() 
 * Perform basic arithmetic as a calculator
 * @param: none (main never gets params)
 * @return: none (main never gets returns)
 */
 // Ask the user what operation they want (+, -, *, /)
 // Ask the user for the first number (a)
 // Parse a as an integer
 // Ask the user for the second number (b)
 // Parse b as an integer
 // Based on the operation, send the numbers to the right function as arguments 
 // store the returned value in variable called result
 // Alert the equation a + operation + b = result
function main(){
    let operation=prompt("What do you want? + - * /")
    let a = prompt("What will A value?")
    let b = prompt("What will B value?")
    b=parseInt(b)
    a=parseInt(a)

        if (operation=="+"){
            result=add(a,b)}
        else if (operation=="-")result=subtract(a,b)
        else if (operation=="*")result=mult(a,b)
        else(opertation=="/"),result=div(a,b)

    alert(a + operation + b +" = "+ result)
}


/* FUNCTION add(a,b)
 * define a function called add with two number parameters a and b
 * @param: a, b (integers)
 * @return: a + b
 */
function add(a,b){
return a+b
}
/* FUNCTION subtract(a,b)
 * define a function called subtract with two number parameters a and b
 * @param: a, b (integers)
 * @return: a - b
 */
function subtract(a,b){
return a-b
    
}
/* FUNCTION multiply(a,b)
 * define a function called multiply with two number parameters a and b
 * @param: a, b (integers)
 * @return: a * b (* means multiply)
 */
function mult(a,b){
return a*b
    
}
/* FUNCTION divide(a,b)
 * define a function called divide with two number parameters a and b
 * @param: a, b (integers)
 * @return: a / b (/ means divided by)
 */
function div(a,b){
return a/b
    
}
/* ************************************* */