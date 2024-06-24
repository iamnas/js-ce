
// let ans = {}
// function countS(str){

//     for (char of str){

//         ans[char] = (ans[char] ||0)+1
//     }
    
//     console.log(ans)
// }
  

// countS("HELLO")


// console.log(/[a-zA-Z1-9]/.test('!'));


// const array1 = [5, 12, 8, 130, 44];
// const str = "hello";

// // console.log(str[-1]);
// if(isNaN(str[-1])){
//     console.log("PICCHI");
// }
// console.log(array1.at(-2));
// // console.log(array1[-2]);



let ans = []
const str = [1,2,3,4,5];


for(char of str){
    ans = char+ans
    // ans.unshift(char);
}

console.log(ans);       