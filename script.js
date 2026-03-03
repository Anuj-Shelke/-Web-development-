//Create a array of three fruits Print the Second Fruit 
let fruits = ["mango","Apple","PineApple"]; 
fruits[1]; 
//Add kiwi at the first position and chickoo at the last position 
fruits.unshift("Kiwi"); 
fruits.push("Chickoo"); 
console.log(fruits); 
//Replace Banana With kiwi With the Given Array 
fruits.splice(0,1,"Bannana"); 
console.log(fruits); 
//What is the difference Between .push() and .unshift() 
//.push() adds element at the end .unshift adds element at the start 
//REMOVE THE LAST ELEMENT FROM THE ARRAY 
fruits.pop(); 
console.log(fruits); // Popped Chickoo 
// Extract only middle three element from the array ; 
let frr = fruits.slice(1,3); 
console.log(frr); 
//sort the list of fruits in an alphabatically ; 
fruits.sort().reverse(); 
console.log(fruits); 
//Create a new array and use filter to keep only number Greater than 10 ;
let nums = [1,2,78,5,63,23,12]; 
let greater = nums.filter(function(val){
    return val >10; 
});
console.log(greater); 
//------------------**Using Reduce**---------------------
//Use reduce to get the Sum of the ARRAY ; 
let sum = nums.reduce(function(accumulator,val){
    return accumulator+val ; 
},0);
console.log(sum); 
//--------------------**Using Find**---------------------
//Use Find to get first number greater than 10 
let num1 = nums.find(function(val){
    return val<10;
});
console.log(num1);