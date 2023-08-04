/*Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

The returned array should be created such that returnedArray[i] = fn(arr[i], i).

Please solve it without the built-in Array.map method. 
https://leetcode.com/problems/apply-transform-over-each-element-in-array/description/?envType=study-plan-v2&envId=30-days-of-javascript*/ 


//1st Way -> USing a for loop
var map = function(arr, n){
    const transformedArray = []; //empty array where result would be stored
    for(let i=0; i<arr.length(); i++){
        transformedArray[i] = fn(arr, i);
    }
    return transformedArray;
}

//2nd way is using forEachl loop
var map = function(arr, n){
    const transformedArray = [];
    arr.forEach((element, index)=>{
        transformedArray[index] = fn(element, index);
    });
    return transformedArray;
}

//Using reduce method
/*https://chat.openai.com/share/78e0aa75-5e6c-4123-b153-5d5516899f7b */
var map = function(arr, n){
    return arr.reduce((transformedArray,element,index)=>{
        transformedArray[index] = fn(element, index);
        return transformedArray;
    }, []);
};

// Using for...of 
//https://chat.openai.com/share/e1218937-00db-4f79-966a-33eb0fd5cb7a

