let arr = [1,2,3,4,5,6]; 
arr.forEach(function(val){
    console.log(val); 
});
arr.push(13); 

arr.pop();
arr.shift(); 

 
arr.unshift("Unshifted"); 
arr.splice(1,2,5);//Started from index 1 removed two elements (2,3) and adds 5 on their place 
let newarr = arr.slice(1,4); 
console.log(newarr); 
arr.reverse();// reverse the original Array 
arr.sort(); //sort the original Array 
let even = arr.filter(function(val){
return val %2 === 0 ; 
});//Filtered the Main array and returned only the sorted array as new one 
console.log(even); 
let total  = arr.reduce(function(accumulator , val ){
    return accumulator+val ; 
},0); 
console.log(total); 
console.log(arr);
let arr2 = [...arr]; 
console.log(arr2); //Creates a copy of the original Array but here the thing is The copied arry is complete independent changes made in it does not affect the original one 