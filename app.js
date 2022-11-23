/*
 * You Do: Work through the following prompts. Write your code below each
 * comment.
 */

// 1. Get all elements with a class of `.second` from the DOM and save them to
//    a variable. This will be a NodeList (which works just like an array).
const getByAllClass = document.getElementsByClassName("second");
console.log(getByAllClass);
// 2. Get the first item from the NodeList and save it to a variable.
const first_item = getByAllClass[0];
// 3. Print the `dataset` property of the item from Step 2.
first_item.data = "chapter: first_element";
console.log(first_item.data);
// 4. Add a `data-name` attribute to the HTML page for the first heading with
//    a class of second. The value of `data-name` should be your name. What
//    happens when you print the `dataset` property now?
console.log(document.querySelector("[data-name = 'MyName]").data);
