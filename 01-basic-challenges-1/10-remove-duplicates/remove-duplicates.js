// Solution 1

// function removeDuplicates(arr){

//     let uniqueArr = []

//     for(let i=0; i < arr.length; i++){
        
//         if(!uniqueArr.includes(arr(i))){
//             uniqueArr.push(arr[i])
//         }

//         return uniqueArr
//     }


// }

// Solution 2

function removeDuplicates(arr){

   let uniqueArr = new Set(arr)

   return Array.from(uniqueArr)


}

console.log(removeDuplicates([1,1,1,2,3]))


