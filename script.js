/* SHOPPING LIST KATA:  */

// Every day, you are sent to buy 5 items. 
function main(){
    makeList()
}
/* 1. for loop and string concatenation */

/* Function makeList()
 * Create a shopping list string called shoppingList as "To Buy:"
 * create a five-item loop, and in the loop, 
 * ask for next item to buy (item #), and add it to the list 
 * add a line break after each item added
 * when loop's done, alert the list
 */
 function makeList() {
    let shoppingList = "To Buy:\n"; 
    for (let i = 1; i <= 5; i++) {
        let item = prompt("Enter item #" + i + ":");
        shoppingList += i + ". " + item + "\n"; 
    }

    alert(shoppingList); // Show the full shopping list
}
/* 2. for loop and array with toString */

/* Same function, using previous code, BUT:
 * build shopArray variable for the shopping list
 * adjust loop to work with the array index values (start at 0)
 * ask for next list item and push it to the shopArray
 * no need to add a line break after
 * at end of loop, alert the list title, followed by
 * the list with toString() method (it won't have line breaks)*/

function makeList() {
    let shopArray = [];
    for (let i = 0; i < 5; i++) {
        let item = prompt("Enter item #" + (i + 1) + ":");
        shopArray.push(item) 
    }
    alert("To Buy:\n" + shopArray.toString());
}
/* 3. for loop and array with join method 

/* Same function, using previous code, BUT:
 * the at end, alert list with array.join() method with line breaks 
 * instead of commas */
 function makeList() {
    let shopArray = [];
    for (let i = 0; i < 5; i++) {
        let item = prompt("Enter item #" + (i + 1) + ":");
        shopArray.push(item);
    }

    alert("To Buy:\n" + shopArray.join("\n"))
}
/* 4. 2D Arrays: add Pricing */

/* Same function, using previous code, but THIS TIME add prices
 * When someone enters an item, prompt them also to enter a price separating by comma (like milk, 1.99)])   
 * Convert that entry to an itemPrice array by using string.split() and use a comma as delimiter
 * Push the itemPrice array to shopArray
 */
function makeList() {
    let shopArray = []; // This will hold [item, price] pairs

    for (let i = 0; i < 5; i++) {
        let entry = prompt("Enter item #" + (i + 1) + ", price?");
        let itemPrice = entry.split(","); 
        shopArray.push(itemPrice);
    }
    alert("To Buy:\n" + shopArray.join("\n"))
/* 5. Total up the prices */

/* Same function, using previous code, but THIS TIME total the prices.
 * After you have built the array, create a NEW loop that adds the price 
 * of each item to a total. Do this before the alert. 
 * Save the first alert content as message. 
 * Add total as a line below message, then alert the message. 
 */
function makeList(items){
    let shopArray=[]
    let itemPrice=[]
    let entry=""
    for(let i=0; i<=items; i++){
        entry = prompt("Item: " + i + "item, price ?" )
        itemPrice=entry.split(",")
        shopArray.push(itemPrice)
    }
    let total=0
    for(let i=0; i<shopArray.length; i++){
        total+=parseInt(shopArray[i][1])
    }
    alert ("shopping list \n" + shopArray.join("\n") + "\n Total = "+ total)
}