

const charCount = (str) =>{
    let ans = {}
    // str.forEach((element)=>{

    //     ans[element] = (ans[element] || 0) + 1

    // })

    for (var char of str){
        ans[char] = (ans[char] || 0) + 1
    }

    return ans
}
const test = ['H','E','L','L','O']
console.log("at",test.at(-2));
console.log(charCount("test"))


// console.log();